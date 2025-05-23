import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { chatMembershipsTable } from "~/src/drizzle/tables/chatMemberships";
import { builder } from "~/src/graphql/builder";
import {
	MutationDeleteChatMembershipInput,
	mutationDeleteChatMembershipInputSchema,
} from "~/src/graphql/inputs/MutationDeleteChatMembershipInput";
import { Chat } from "~/src/graphql/types/Chat/Chat";
import { TalawaGraphQLError } from "~/src/utilities/TalawaGraphQLError";
import envConfig from "~/src/utilities/graphqLimits";
const mutationDeleteChatMembershipArgumentsSchema = z.object({
	input: mutationDeleteChatMembershipInputSchema,
});

builder.mutationField("deleteChatMembership", (t) =>
	t.field({
		args: {
			input: t.arg({
				description: "",
				required: true,
				type: MutationDeleteChatMembershipInput,
			}),
		},
		complexity: envConfig.API_GRAPHQL_OBJECT_FIELD_COST,
		description: "Mutation field to delete a chat membership.",
		resolve: async (_parent, args, ctx) => {
			if (!ctx.currentClient.isAuthenticated) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "unauthenticated",
					},
				});
			}

			const {
				success,
				data: parsedArgs,
				error,
			} = mutationDeleteChatMembershipArgumentsSchema.safeParse(args);

			if (!success) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "invalid_arguments",
						issues: error.issues.map((issue) => ({
							argumentPath: issue.path,
							message: issue.message,
						})),
					},
				});
			}

			const currentUserId = ctx.currentClient.user.id;

			const [currentUser, existingChat, existingMember] = await Promise.all([
				ctx.drizzleClient.query.usersTable.findFirst({
					columns: {
						role: true,
					},
					where: (fields, operators) => operators.eq(fields.id, currentUserId),
				}),
				ctx.drizzleClient.query.chatsTable.findFirst({
					with: {
						chatMembershipsWhereChat: {
							columns: {
								memberId: true,
								role: true,
							},
							where: (fields, operators) =>
								operators.inArray(fields.memberId, [
									currentUserId,
									parsedArgs.input.memberId,
								]),
						},
						organization: {
							columns: {
								countryCode: true,
							},
							with: {
								membershipsWhereOrganization: {
									columns: {
										role: true,
									},
									where: (fields, operators) =>
										operators.eq(fields.memberId, currentUserId),
								},
							},
						},
					},
					where: (fields, operators) =>
						operators.eq(fields.id, parsedArgs.input.chatId),
				}),
				ctx.drizzleClient.query.usersTable.findFirst({
					columns: {
						role: true,
					},
					where: (fields, operators) =>
						operators.eq(fields.id, parsedArgs.input.memberId),
				}),
			]);

			if (currentUser === undefined) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "unauthenticated",
					},
				});
			}

			if (existingChat === undefined && existingMember === undefined) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "arguments_associated_resources_not_found",
						issues: [
							{
								argumentPath: ["input", "chatId"],
							},
							{
								argumentPath: ["input", "memberId"],
							},
						],
					},
				});
			}

			if (existingChat === undefined) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "arguments_associated_resources_not_found",
						issues: [
							{
								argumentPath: ["input", "chatId"],
							},
						],
					},
				});
			}

			if (existingMember === undefined) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "arguments_associated_resources_not_found",
						issues: [
							{
								argumentPath: ["input", "memberId"],
							},
						],
					},
				});
			}

			const [currentUserChatMembership, existingChatMembership] = [
				currentUserId,
				parsedArgs.input.memberId,
			].map((id) =>
				existingChat.chatMembershipsWhereChat.find(
					(membership) => membership.memberId === id,
				),
			);

			if (existingChatMembership === undefined) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "arguments_associated_resources_not_found",
						issues: [
							{
								argumentPath: ["input", "memberId"],
							},
							{
								argumentPath: ["input", "chatId"],
							},
						],
					},
				});
			}

			const currentUserOrganizationMembership =
				existingChat.organization.membershipsWhereOrganization[0];

			if (
				currentUser.role !== "administrator" &&
				(currentUserOrganizationMembership === undefined ||
					(currentUserOrganizationMembership.role !== "administrator" &&
						(currentUserChatMembership === undefined ||
							(currentUserChatMembership.role !== "administrator" &&
								currentUserId !== parsedArgs.input.memberId))))
			) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "unauthorized_action_on_arguments_associated_resources",
						issues: [
							{
								argumentPath: ["input", "memberId"],
							},
							{
								argumentPath: ["input", "chatId"],
							},
						],
					},
				});
			}

			const [deletedChatMembership] = await ctx.drizzleClient
				.delete(chatMembershipsTable)
				.where(
					and(
						eq(chatMembershipsTable.chatId, parsedArgs.input.chatId),
						eq(chatMembershipsTable.memberId, parsedArgs.input.memberId),
					),
				)
				.returning();

			// Deleted chat membership not being returned means that either it was deleted or its `member_id` column or `chat_id` column or both were changed by external entities before this delete operation could take place.
			if (deletedChatMembership === undefined) {
				throw new TalawaGraphQLError({
					extensions: {
						code: "unexpected",
					},
				});
			}

			return existingChat;
		},
		type: Chat,
	}),
);
