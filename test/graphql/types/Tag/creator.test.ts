import { createMockGraphQLContext } from "test/_Mocks_/mockContextCreator/mockContextCreator";
import { beforeEach, describe, expect, it } from "vitest";
import type { GraphQLContext } from "~/src/graphql/context";
import type { Tag as TagType } from "~/src/graphql/types/Tag/Tag";
import { tagCreatorResolver } from "~/src/graphql/types/Tag/creator";
import { TalawaGraphQLError } from "~/src/utilities/TalawaGraphQLError";

//mock current user details
type MockUser = {
	id: string;
	role: string;
	organizationMembershipsWhereMember: Array<{
		role: string;
		organizationId: string;
	}>;
};

describe("Tag Creator Resolver -Test ", () => {
	let mockTag: TagType;
	let ctx: GraphQLContext;
	let mocks: ReturnType<typeof createMockGraphQLContext>["mocks"];

	beforeEach(() => {
		const { context, mocks: newMocks } = createMockGraphQLContext(
			true,
			"user-123",
		);
		ctx = context;
		mocks = newMocks;
		mockTag = {
			id: "550e8400-e29b-41d4-a716-446655440000",
			name: "Urgent",
			creatorId: "123e4567-e89b-12d3-a456-426614174000",
			updaterId: "123e4567-e89b-12d3-a456-426614174000",
			folderId: "234e5678-f89c-12d3-a456-426614174111",
			organizationId: "987fbc97-4bed-5078-bf8c-64e9bb4b5f32",
			createdAt: new Date("2024-02-07T10:30:00.000Z"),
			updatedAt: new Date("2024-02-07T12:00:00.000Z"),
		};
	});

	describe("Authentication and Authorization", () => {
		it("should throw unauthenticated error if user is not logged in", async () => {
			ctx.currentClient.isAuthenticated = false;
			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthenticated" } }),
			);
		});

		it("should throw unauthorized_action for non admin and no organizationMemberShip", async () => {
			const mockUserData: MockUser = {
				id: "user-123",
				role: "member",
				organizationMembershipsWhereMember: [],
			};

			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockUserData,
			);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthorized_action" } }),
			);
		});

		it("should throw unauthorized_action for non admin with member-level organization membership", async () => {
			const mockUserData: MockUser = {
				id: "user-123",
				role: "member",
				organizationMembershipsWhereMember: [
					{ role: "member", organizationId: mockTag.organizationId },
				],
			};

			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockUserData,
			);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthorized_action" } }),
			);
		});

		it("should allow system administrator full access", async () => {
			const mockUserData: MockUser = {
				id: "user-123",
				role: "administrator",
				organizationMembershipsWhereMember: [],
			};

			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockUserData,
			);

			const result = await tagCreatorResolver(mockTag, {}, ctx);
			expect(result).toBeDefined();
		});

		it("should allow organization administrator access", async () => {
			const mockUserData: MockUser = {
				id: "user-123",
				role: "administrator",
				organizationMembershipsWhereMember: [
					{ role: "administrator", organizationId: mockTag.organizationId },
				],
			};
			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockUserData,
			);

			const result = await tagCreatorResolver(mockTag, {}, ctx);
			expect(result).toBeDefined();
		});

		it("should throw unauthenticated error for undefined current user", async () => {
			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				undefined,
			);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthenticated" } }),
			);
		});

		it("should throw an unexpected error if database query fails", async () => {
			const mockCurrentUser: MockUser = {
				id: "user-123",
				role: "administrator",
				organizationMembershipsWhereMember: [
					{ role: "administrator", organizationId: mockTag.organizationId },
				],
			};

			const findFirst = mocks.drizzleClient.query.usersTable.findFirst;

			// First call returns a valid current user
			findFirst.mockResolvedValueOnce(mockCurrentUser);

			// Simulate a database error when fetching creator
			findFirst.mockRejectedValueOnce(new Error("Database connection failed"));

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					message: "Internal server error",
					extensions: { code: "unexpected" },
				}),
			);
		});
	});

	describe("Creator Retrieval tests", () => {
		it("should return null for null creatorId", async () => {
			mockTag.creatorId = null;
			const mockUserData: MockUser = {
				id: "user-123",
				role: "administartor",
				organizationMembershipsWhereMember: [
					{ role: "administrator", organizationId: mockTag.organizationId },
				],
			};

			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockUserData,
			);

			const result = await tagCreatorResolver(mockTag, {}, ctx);
			expect(result).toBeNull();
		});

		it("should throw an unauthorized_action error if the current user is not an administrator", async () => {
			mockTag.creatorId = "user-123";
			const mockUserData: MockUser = {
				id: "user-123",
				role: "member", // Not an admin
				organizationMembershipsWhereMember: [], // No special permissions
			};

			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockUserData,
			);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthorized_action" } }),
			);
		});

		it("should return current user if they are the creator", async () => {
			mockTag.creatorId = "user-123";
			const mockUserData: MockUser = {
				id: "user-123",
				role: "administrator",
				organizationMembershipsWhereMember: [],
			};

			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockUserData,
			);

			const result = await tagCreatorResolver(mockTag, {}, ctx);
			expect(result).toEqual(
				expect.objectContaining({
					id: "user-123",
					role: "administrator",
				}),
			);
		});

		it("should fetch creator from database when different from current user", async () => {
			const mockCurrentUser: MockUser = {
				id: "user-123",
				role: "member",
				organizationMembershipsWhereMember: [
					{ role: "administrator", organizationId: mockTag.organizationId },
				],
			};

			const mockCreator: MockUser = {
				id: "creator-456",
				role: "member",
				organizationMembershipsWhereMember: [],
			};

			const findFirst = mocks.drizzleClient.query.usersTable.findFirst;
			findFirst
				.mockResolvedValueOnce(mockCurrentUser)
				.mockResolvedValueOnce(mockCreator);

			const result = await tagCreatorResolver(mockTag, {}, ctx);
			expect(result).toEqual(
				expect.objectContaining({
					id: "creator-456",
					role: "member",
				}),
			);
		});

		it("should throw unexpected error if existing user is not found ", async () => {
			const mockCurrentUser: MockUser = {
				id: "user-123",
				role: "member",
				organizationMembershipsWhereMember: [
					{ role: "administrator", organizationId: mockTag.organizationId },
				],
			};

			const findFirst = mocks.drizzleClient.query.usersTable.findFirst;
			findFirst
				.mockResolvedValueOnce(mockCurrentUser)
				.mockResolvedValueOnce(undefined);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unexpected" } }),
			);
		});
	});

	describe("Database Query Errors", () => {
		it("should handle database connection error", async () => {
			// Simulate database connection error for first findFirst call
			mocks.drizzleClient.query.usersTable.findFirst.mockRejectedValueOnce(
				new Error("ECONNREFUSED"),
			);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					message: "Internal server error",
					extensions: { code: "unexpected" },
				}),
			);

			expect(ctx.log.error).toHaveBeenCalled();
		});

		it("should handle database timeout error", async () => {
			// Simulate database timeout for first findFirst call
			mocks.drizzleClient.query.usersTable.findFirst.mockRejectedValueOnce(
				new Error("Query timeout"),
			);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					message: "Internal server error",
					extensions: { code: "unexpected" },
				}),
			);

			expect(ctx.log.error).toHaveBeenCalled();
		}, 1000);

		it("should handle database constraint violation", async () => {
			// Simulate database constraint error
			mocks.drizzleClient.query.usersTable.findFirst.mockRejectedValueOnce(
				new Error("violates foreign key constraint"),
			);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					message: "Internal server error",
					extensions: { code: "unexpected" },
				}),
			);

			expect(ctx.log.error).toHaveBeenCalled();
		});

		it("should handle database query syntax error", async () => {
			// Simulate database syntax error
			mocks.drizzleClient.query.usersTable.findFirst.mockRejectedValueOnce(
				new Error("syntax error in SQL statement"),
			);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					message: "Internal server error",
					extensions: { code: "unexpected" },
				}),
			);

			expect(ctx.log.error).toHaveBeenCalled();
		});
	});

	describe("Concurrent Access", () => {
		it("should handle concurrent updates to the same tag", async () => {
			const mockUserData = {
				id: "user-123",
				role: "administrator",
				organizationMembershipsWhereMember: [
					{
						role: "administrator",
						organizationId: mockTag.organizationId,
					},
				],
			};

			// First call returns the current user successfully
			mocks.drizzleClient.query.usersTable.findFirst
				.mockResolvedValueOnce(mockUserData)
				// Second call (for creator) returns undefined, simulating concurrent deletion
				.mockResolvedValueOnce(undefined);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					extensions: { code: "unexpected" },
				}),
			);

			// Verify error was logged
			expect(ctx.log.error).toHaveBeenCalledWith(
				"Postgres select operation returned an empty array for a tag's creator id that isn't null.",
			);
		});

		it("should handle database error during concurrent access", async () => {
			const mockUserData = {
				id: "user-123",
				role: "administrator",
				organizationMembershipsWhereMember: [
					{
						role: "administrator",
						organizationId: mockTag.organizationId,
					},
				],
			};

			// First call succeeds
			mocks.drizzleClient.query.usersTable.findFirst
				.mockResolvedValueOnce(mockUserData)
				// Second call fails with database error
				.mockRejectedValueOnce(
					new Error("Database error during concurrent access"),
				);

			await expect(tagCreatorResolver(mockTag, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					message: "Internal server error",
					extensions: { code: "unexpected" },
				}),
			);

			// Verify error was logged
			expect(ctx.log.error).toHaveBeenCalled();
		});
	});
});
