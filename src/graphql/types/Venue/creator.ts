import { User } from "~/src/graphql/types/User/User";
import { TalawaGraphQLError } from "~/src/utilities/TalawaGraphQLError";
import envConfig from "~/src/utilities/graphqLimits";
import type { GraphQLContext } from "../../context";
import { Venue, type Venue as VenueType } from "./Venue";
export const venueCreator = async (
	parent: VenueType,
	_args: Record<string, never>,
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
					operators.eq(fields.organizationId, parent.organizationId),
			},
		},
		where: (fields, operators) => operators.eq(fields.id, currentUserId),
	});

	if (currentUser === undefined) {
		throw new TalawaGraphQLError({
			extensions: {
				code: "unauthenticated",
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

	if (parent.creatorId === null) {
		return null;
	}

	if (parent.creatorId === currentUserId) {
		return currentUser;
	}

	const creatorId = parent.creatorId;

	const existingUser = await ctx.drizzleClient.query.usersTable.findFirst({
		where: (fields, operators) => operators.eq(fields.id, creatorId),
	});

	// Creator id existing but the associated user not existing is a business logic error and probably means that the corresponding data in the database is in a corrupted state. It must be investigated and fixed as soon as possible to prevent additional data corruption.
	if (existingUser === undefined) {
		ctx.log.error(
			"Postgres select operation returned an empty array for a venue's creator id that isn't null.",
		);

		throw new TalawaGraphQLError({
			extensions: {
				code: "unexpected",
			},
		});
	}

	return existingUser;
};

Venue.implement({
	fields: (t) => ({
		creator: t.field({
			description: "User who created the venue.",
			resolve: venueCreator,
			type: User,
			complexity: envConfig.API_GRAPHQL_OBJECT_FIELD_COST,
		}),
	}),
});
