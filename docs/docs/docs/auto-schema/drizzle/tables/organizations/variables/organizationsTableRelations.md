[Admin Docs](/)

***

# Variable: organizationsTableRelations

> `const` **organizationsTableRelations**: `Relations`\<`"organizations"`, \{ `actionCategoriesWhereOrganization`: `Many`\<`"action_categories"`\>; `actionsWhereOrganization`: `Many`\<`"actions"`\>; `advertisementsWhereOrganization`: `Many`\<`"advertisements"`\>; `chatsWhereOrganization`: `Many`\<`"chats"`\>; `creator`: `One`\<`"users"`, `false`\>; `eventsWhereOrganization`: `Many`\<`"events"`\>; `familiesWhereOrganization`: `Many`\<`"families"`\>; `fundsWhereOrganization`: `Many`\<`"funds"`\>; `membershipsWhereOrganization`: `Many`\<`"organization_memberships"`\>; `postsWhereOrganization`: `Many`\<`"posts"`\>; `tagFoldersWhereOrganization`: `Many`\<`"tag_folders"`\>; `tagsWhereOrganization`: `Many`\<`"tags"`\>; `updater`: `One`\<`"users"`, `false`\>; `venuesWhereOrganization`: `Many`\<`"venues"`\>; \}\>

Defined in: src/drizzle/tables/organizations.ts:130
