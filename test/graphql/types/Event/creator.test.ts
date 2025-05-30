import { createMockGraphQLContext } from "test/_Mocks_/mockContextCreator/mockContextCreator";
import { beforeEach, describe, expect, it } from "vitest";
import type { GraphQLContext } from "~/src/graphql/context";
import type { Event as EventType } from "~/src/graphql/types/Event/Event";
import { eventCreatorResolver } from "~/src/graphql/types/Event/creator";
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

describe("Event Creator Resolver -Test ", () => {
	let ctx: GraphQLContext;
	let mockEvent: EventType;
	let mocks: ReturnType<typeof createMockGraphQLContext>["mocks"];

	beforeEach(() => {
		const { context, mocks: newMocks } = createMockGraphQLContext(
			true,
			"user-123",
		);
		ctx = context;
		mocks = newMocks;
		mockEvent = {
			id: "550e8400-e29b-41d4-a716-446655440000",
			name: "Annual General Meeting",
			description: "Discussion on yearly progress and future goals.",
			createdAt: new Date("2024-02-01T10:00:00Z"),
			updatedAt: new Date("2024-02-05T12:00:00Z"),
			startAt: new Date("2024-03-10T09:00:00Z"),
			endAt: new Date("2024-03-10T12:00:00Z"),
			creatorId: "123e4567-e89b-12d3-a456-426614174000",
			updaterId: "223e4567-e89b-12d3-a456-426614174001",
			organizationId: "789e1234-e89b-12d3-a456-426614174002",
		} as EventType;
	});

	describe("Authentication and Authorization", () => {
		it("should throw unauthenticated error if user is not logged in", async () => {
			ctx.currentClient.isAuthenticated = false;
			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthenticated" } }),
			);
		});

		it("should throw unauthenticated error is userId exists but current user doesn't exists", async () => {
			const currentUser = undefined;
			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				currentUser,
			);

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
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
			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthorized_action" } }),
			);
		});
		it("should throw unauthorized_action for non admin user", async () => {
			const mockUserData: MockUser = {
				id: "user-123",
				role: "member",
				organizationMembershipsWhereMember: [
					{ role: "member", organizationId: "org-123" },
				],
			};

			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockUserData,
			);

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthorized_action" } }),
			);
		});
	});

	it("should return null for null creatorId", async () => {
		mockEvent.creatorId = null;
		const mockUserData: MockUser = {
			id: "user-123",
			role: "administartor",
			organizationMembershipsWhereMember: [
				{ role: "administrator", organizationId: mockEvent.organizationId },
			],
		};

		mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
			mockUserData,
		);

		const result = await eventCreatorResolver(mockEvent, {}, ctx);
		expect(result).toBeNull();
	});

	it("should return current user if they are the creator", async () => {
		mockEvent.creatorId = "user-123";
		const mockUserData: MockUser = {
			id: "user-123",
			role: "administrator",
			organizationMembershipsWhereMember: [],
		};

		mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
			mockUserData,
		);
		const result = await eventCreatorResolver(mockEvent, {}, ctx);
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
				{ role: "administrator", organizationId: mockEvent.organizationId },
			],
		};

		const mockCreator: MockUser = {
			id: "creator-456",
			role: "member",
			organizationMembershipsWhereMember: [],
		};

		const findFirst =
			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockCurrentUser,
			);

		findFirst
			.mockResolvedValueOnce(mockCurrentUser)
			.mockResolvedValueOnce(mockCreator);

		const result = await eventCreatorResolver(mockEvent, {}, ctx);
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
				{ role: "administrator", organizationId: mockEvent.organizationId },
			],
		};

		const findFirst =
			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValue(
				mockCurrentUser,
			);
		findFirst
			.mockResolvedValueOnce(mockCurrentUser)
			.mockResolvedValueOnce(undefined);

		await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
			new TalawaGraphQLError({ extensions: { code: "unexpected" } }),
		);
	});

	describe("Database Query Errors", () => {
		it("should handle database connection error", async () => {
			// Simulate database connection error for first findFirst call
			mocks.drizzleClient.query.usersTable.findFirst.mockRejectedValueOnce(
				new Error("ECONNREFUSED"),
			);

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
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

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
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

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
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

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
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
						organizationId: mockEvent.organizationId,
					},
				],
			};

			// First call returns the current user successfully
			mocks.drizzleClient.query.usersTable.findFirst
				.mockResolvedValueOnce(mockUserData)
				// Second call (for creator) returns undefined, simulating concurrent deletion
				.mockResolvedValueOnce(undefined);

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					extensions: { code: "unexpected" },
				}),
			);
			expect(ctx.log.error).toHaveBeenCalledWith(
				"Postgres select operation returned an empty array for an event's creator id that isn't null.",
			);
		});

		it("should handle database error during concurrent access", async () => {
			const mockUserData = {
				id: "user-123",
				role: "administrator",
				organizationMembershipsWhereMember: [
					{
						role: "administrator",
						organizationId: mockEvent.organizationId,
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

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({
					message: "Internal server error",
					extensions: { code: "unexpected" },
				}),
			);

			expect(ctx.log.error).toHaveBeenCalled();
		});
	});
	describe("Error Handling Cases", () => {
		it("should pass through TalawaGraphQLError without wrapping", async () => {
			const originalError = new TalawaGraphQLError({
				message: "Custom error",
				extensions: { code: "unexpected" },
			});

			mocks.drizzleClient.query.usersTable.findFirst.mockRejectedValueOnce(
				originalError,
			);

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
				originalError,
			);
			expect(ctx.log.error).not.toHaveBeenCalled();
		});

		it("should handle missing organization membership gracefully", async () => {
			const mockUserData: MockUser = {
				id: "user-123",
				role: "member",
				organizationMembershipsWhereMember: [],
			};

			mocks.drizzleClient.query.usersTable.findFirst.mockResolvedValueOnce(
				mockUserData,
			);

			await expect(eventCreatorResolver(mockEvent, {}, ctx)).rejects.toThrow(
				new TalawaGraphQLError({ extensions: { code: "unauthorized_action" } }),
			);
		});
	});
});
