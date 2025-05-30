import { and, count, eq } from "drizzle-orm";
import { commentsTable } from "~/src/drizzle/tables/comments";
import envConfig from "~/src/utilities/graphqLimits";
import { Post } from "./Post";

Post.implement({
	fields: (t) => ({
		commentsCount: t.field({
			complexity: envConfig.API_GRAPHQL_SCALAR_RESOLVER_FIELD_COST,
			description: "Total number of comments created under the post.",
			resolve: async (parent, _args, ctx) => {
				const [commentsCount] = await ctx.drizzleClient
					.select({
						count: count(),
					})
					.from(commentsTable)
					.where(and(eq(commentsTable.postId, parent.id)));

				if (commentsCount === undefined) {
					return 0;
				}

				return commentsCount.count;
			},
			type: "Int",
		}),
	}),
});
