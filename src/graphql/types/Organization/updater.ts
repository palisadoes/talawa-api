import { User } from "~/src/graphql/types/User/User";
import { TalawaGraphQLError } from "~/src/utilities/TalawaGraphQLError";
import envConfig from "~/src/utilities/graphqLimits";
import type { GraphQLContext } from "../../context";
import {
	Organization,
	type Organization as OrganizationType,
} from "./Organization";
export const OrganizationUpdater = async (
	parent: OrganizationType,
	_args: Record<string, unknown>,
	ctx: GraphQLContext,
) => {
	if (!ctx.currentClient.isAuthenticated) {
		throw new TalawaGraphQLError({
			extensions: {
				code: "unauthenticated",
			},
		});
	}

	const currentUserId = ctx.currentClient.user.id;

	const currentUser = await ctx.drizzleClient.query.usersTable.findFirst({
		with: {
			organizationMembershipsWhereMember: {
				columns: {
					role: true,
				},
				where: (fields, operators) =>
					operators.eq(fields.organizationId, parent.id),
			},
		},
		where: (fields, operators) => operators.eq(fields.id, currentUserId),
	});

	if (currentUser === undefined) {
		throw new TalawaGraphQLError({
			extensions: {
				code: "forbidden_action",
			},
		});
	}

	const currentUserOrganizationMembership =
		currentUser.organizationMembershipsWhereMember[0];

	if (
		currentUser.role !== "administrator" &&
		(currentUserOrganizationMembership === undefined ||
			currentUserOrganizationMembership.role !== "administrator")
	) {
		throw new TalawaGraphQLError({
			extensions: {
				code: "unauthorized_action",
			},
		});
	}

	if (parent.updaterId === null) {
		return null;
	}

	if (parent.updaterId === currentUserId) {
		return currentUser;
	}

	const updaterId = parent.updaterId;

	const existingUser = await ctx.drizzleClient.query.usersTable.findFirst({
		where: (fields, operators) => operators.eq(fields.id, updaterId),
	});

	// Updater id existing but the associated user not existing is either a business logic error which means that the corresponding data in the database is in a corrupted state or it is a rare race condition. It must be investigated and fixed as soon as possible to prevent further data corruption if the former case is true.
	if (existingUser === undefined) {
		ctx.log.warn(
			"Postgres select operation returned an empty array for a organization's updater id that isn't null.",
		);

		throw new TalawaGraphQLError({
			extensions: {
				code: "unexpected",
			},
		});
	}

	return existingUser;
};
Organization.implement({
	fields: (t) => ({
		updater: t.field({
			description: "User who last updated the organization.",
			resolve: OrganizationUpdater,
			complexity: envConfig.API_GRAPHQL_OBJECT_FIELD_COST,
			type: User,
		}),
	}),
});
