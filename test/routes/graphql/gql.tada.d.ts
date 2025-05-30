/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
	Advertisement: {
		kind: "OBJECT";
		name: "Advertisement";
		fields: {
			attachments: {
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "OBJECT";
							name: "AdvertisementAttachment";
							ofType: null;
						};
					};
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			endAt: {
				name: "endAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			startAt: {
				name: "startAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			type: {
				name: "type";
				type: { kind: "ENUM"; name: "AdvertisementType"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	AdvertisementAttachment: {
		kind: "OBJECT";
		name: "AdvertisementAttachment";
		fields: {
			mimeType: {
				name: "mimeType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			url: {
				name: "url";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	AdvertisementType: {
		name: "AdvertisementType";
		enumValues: "banner" | "menu" | "pop_up";
	};
	AgendaFolder: {
		kind: "OBJECT";
		name: "AgendaFolder";
		fields: {
			childFolders: {
				name: "childFolders";
				type: {
					kind: "OBJECT";
					name: "AgendaFolderChildFoldersConnection";
					ofType: null;
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			event: {
				name: "event";
				type: { kind: "OBJECT"; name: "Event"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			isAgendaItemFolder: {
				name: "isAgendaItemFolder";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			items: {
				name: "items";
				type: {
					kind: "OBJECT";
					name: "AgendaFolderItemsConnection";
					ofType: null;
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			parentFolder: {
				name: "parentFolder";
				type: { kind: "OBJECT"; name: "AgendaFolder"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	AgendaFolderChildFoldersConnection: {
		kind: "OBJECT";
		name: "AgendaFolderChildFoldersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "AgendaFolderChildFoldersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	AgendaFolderChildFoldersConnectionEdge: {
		kind: "OBJECT";
		name: "AgendaFolderChildFoldersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "AgendaFolder"; ofType: null };
			};
		};
	};
	AgendaFolderItemsConnection: {
		kind: "OBJECT";
		name: "AgendaFolderItemsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "AgendaFolderItemsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	AgendaFolderItemsConnectionEdge: {
		kind: "OBJECT";
		name: "AgendaFolderItemsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "AgendaItem"; ofType: null };
			};
		};
	};
	AgendaItem: {
		kind: "OBJECT";
		name: "AgendaItem";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			duration: {
				name: "duration";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			event: {
				name: "event";
				type: { kind: "OBJECT"; name: "AgendaFolder"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			key: {
				name: "key";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			type: {
				name: "type";
				type: { kind: "ENUM"; name: "AgendaItemType"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	AgendaItemType: {
		name: "AgendaItemType";
		enumValues: "general" | "note" | "scripture" | "song";
	};
	AttachmentInput: {
		kind: "INPUT_OBJECT";
		name: "AttachmentInput";
		isOneOf: false;
		inputFields: [
			{
				name: "mimeType";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "url";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	AuthenticationPayload: {
		kind: "OBJECT";
		name: "AuthenticationPayload";
		fields: {
			authenticationToken: {
				name: "authenticationToken";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			user: {
				name: "user";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	BigInt: unknown;
	BlockedUser: {
		kind: "OBJECT";
		name: "BlockedUser";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			user: {
				name: "user";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	Boolean: unknown;
	Chat: {
		kind: "OBJECT";
		name: "Chat";
		fields: {
			avatarMimeType: {
				name: "avatarMimeType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			avatarURL: {
				name: "avatarURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			members: {
				name: "members";
				type: { kind: "OBJECT"; name: "ChatMembersConnection"; ofType: null };
			};
			messages: {
				name: "messages";
				type: { kind: "OBJECT"; name: "ChatMessagesConnection"; ofType: null };
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	ChatMembersConnection: {
		kind: "OBJECT";
		name: "ChatMembersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "ChatMembersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	ChatMembersConnectionEdge: {
		kind: "OBJECT";
		name: "ChatMembersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	ChatMembershipRole: {
		name: "ChatMembershipRole";
		enumValues: "administrator" | "regular";
	};
	ChatMessage: {
		kind: "OBJECT";
		name: "ChatMessage";
		fields: {
			body: {
				name: "body";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			chat: {
				name: "chat";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			parentMessage: {
				name: "parentMessage";
				type: { kind: "OBJECT"; name: "ChatMessage"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
		};
	};
	ChatMessagesConnection: {
		kind: "OBJECT";
		name: "ChatMessagesConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "ChatMessagesConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	ChatMessagesConnectionEdge: {
		kind: "OBJECT";
		name: "ChatMessagesConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "ChatMessage"; ofType: null };
			};
		};
	};
	Comment: {
		kind: "OBJECT";
		name: "Comment";
		fields: {
			body: {
				name: "body";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			downVoters: {
				name: "downVoters";
				type: {
					kind: "OBJECT";
					name: "CommentDownVotersConnection";
					ofType: null;
				};
			};
			downVotesCount: {
				name: "downVotesCount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			post: {
				name: "post";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
			upVoters: {
				name: "upVoters";
				type: {
					kind: "OBJECT";
					name: "CommentUpVotersConnection";
					ofType: null;
				};
			};
			upVotesCount: {
				name: "upVotesCount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
		};
	};
	CommentDownVotersConnection: {
		kind: "OBJECT";
		name: "CommentDownVotersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "CommentDownVotersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	CommentDownVotersConnectionEdge: {
		kind: "OBJECT";
		name: "CommentDownVotersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	CommentUpVotersConnection: {
		kind: "OBJECT";
		name: "CommentUpVotersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "CommentUpVotersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	CommentUpVotersConnectionEdge: {
		kind: "OBJECT";
		name: "CommentUpVotersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	CommentVoteType: {
		name: "CommentVoteType";
		enumValues: "down_vote" | "up_vote";
	};
	Community: {
		kind: "OBJECT";
		name: "Community";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			facebookURL: {
				name: "facebookURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			githubURL: {
				name: "githubURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			inactivityTimeoutDuration: {
				name: "inactivityTimeoutDuration";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			instagramURL: {
				name: "instagramURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			linkedinURL: {
				name: "linkedinURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			logoMimeType: {
				name: "logoMimeType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			logoURL: {
				name: "logoURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			redditURL: {
				name: "redditURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			slackURL: {
				name: "slackURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			websiteURL: {
				name: "websiteURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			xURL: {
				name: "xURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			youtubeURL: {
				name: "youtubeURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	Date: unknown;
	DateTime: unknown;
	EmailAddress: unknown;
	Event: {
		kind: "OBJECT";
		name: "Event";
		fields: {
			agendaFolders: {
				name: "agendaFolders";
				type: {
					kind: "OBJECT";
					name: "EventAgendaFoldersConnection";
					ofType: null;
				};
			};
			attachments: {
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "EventAttachment"; ofType: null };
					};
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			endAt: {
				name: "endAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			startAt: {
				name: "startAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			venues: {
				name: "venues";
				type: { kind: "OBJECT"; name: "EventVenuesConnection"; ofType: null };
			};
		};
	};
	EventAgendaFoldersConnection: {
		kind: "OBJECT";
		name: "EventAgendaFoldersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "EventAgendaFoldersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	EventAgendaFoldersConnectionEdge: {
		kind: "OBJECT";
		name: "EventAgendaFoldersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "AgendaFolder"; ofType: null };
			};
		};
	};
	EventAttachment: {
		kind: "OBJECT";
		name: "EventAttachment";
		fields: {
			mimeType: {
				name: "mimeType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			url: {
				name: "url";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	EventVenuesConnection: {
		kind: "OBJECT";
		name: "EventVenuesConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "EventVenuesConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	EventVenuesConnectionEdge: {
		kind: "OBJECT";
		name: "EventVenuesConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Venue"; ofType: null };
			};
		};
	};
	FileMetadataInput: {
		kind: "INPUT_OBJECT";
		name: "FileMetadataInput";
		isOneOf: false;
		inputFields: [
			{
				name: "fileHash";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "mimetype";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "ENUM";
						name: "PostAttachmentMimeType";
						ofType: null;
					};
				};
				defaultValue: null;
			},
			{
				name: "objectName";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	Fund: {
		kind: "OBJECT";
		name: "Fund";
		fields: {
			campaigns: {
				name: "campaigns";
				type: { kind: "OBJECT"; name: "FundCampaignsConnection"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			isTaxDeductible: {
				name: "isTaxDeductible";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	FundCampaign: {
		kind: "OBJECT";
		name: "FundCampaign";
		fields: {
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			currencyCode: {
				name: "currencyCode";
				type: { kind: "ENUM"; name: "Iso4217CurrencyCode"; ofType: null };
			};
			endAt: {
				name: "endAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			fund: {
				name: "fund";
				type: { kind: "OBJECT"; name: "Fund"; ofType: null };
			};
			goalAmount: {
				name: "goalAmount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			pledgedAmount: {
				name: "pledgedAmount";
				type: { kind: "SCALAR"; name: "BigInt"; ofType: null };
			};
			pledges: {
				name: "pledges";
				type: {
					kind: "OBJECT";
					name: "FundCampaignPledgesConnection";
					ofType: null;
				};
			};
			startAt: {
				name: "startAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	FundCampaignPledge: {
		kind: "OBJECT";
		name: "FundCampaignPledge";
		fields: {
			amount: {
				name: "amount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			campaign: {
				name: "campaign";
				type: { kind: "OBJECT"; name: "FundCampaign"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			note: {
				name: "note";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			pledger: {
				name: "pledger";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	FundCampaignPledgesConnection: {
		kind: "OBJECT";
		name: "FundCampaignPledgesConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "FundCampaignPledgesConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	FundCampaignPledgesConnectionEdge: {
		kind: "OBJECT";
		name: "FundCampaignPledgesConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "FundCampaignPledge"; ofType: null };
			};
		};
	};
	FundCampaignsConnection: {
		kind: "OBJECT";
		name: "FundCampaignsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "FundCampaignsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	FundCampaignsConnectionEdge: {
		kind: "OBJECT";
		name: "FundCampaignsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "FundCampaign"; ofType: null };
			};
		};
	};
	GetPostsByOrgInput: {
		kind: "INPUT_OBJECT";
		name: "GetPostsByOrgInput";
		isOneOf: false;
		inputFields: [
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "sortOrder";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	GetUrlResponse: {
		kind: "OBJECT";
		name: "GetUrlResponse";
		fields: {
			presignedUrl: {
				name: "presignedUrl";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	ID: unknown;
	Int: unknown;
	Iso3166Alpha2CountryCode: {
		name: "Iso3166Alpha2CountryCode";
		enumValues:
			| "ad"
			| "ae"
			| "af"
			| "ag"
			| "ai"
			| "al"
			| "am"
			| "ao"
			| "aq"
			| "ar"
			| "as"
			| "at"
			| "au"
			| "aw"
			| "ax"
			| "az"
			| "ba"
			| "bb"
			| "bd"
			| "be"
			| "bf"
			| "bg"
			| "bh"
			| "bi"
			| "bj"
			| "bl"
			| "bm"
			| "bn"
			| "bo"
			| "bq"
			| "br"
			| "bs"
			| "bt"
			| "bv"
			| "bw"
			| "by"
			| "bz"
			| "ca"
			| "cc"
			| "cd"
			| "cf"
			| "cg"
			| "ch"
			| "ci"
			| "ck"
			| "cl"
			| "cm"
			| "cn"
			| "co"
			| "cr"
			| "cu"
			| "cv"
			| "cw"
			| "cx"
			| "cy"
			| "cz"
			| "de"
			| "dj"
			| "dk"
			| "dm"
			| "do"
			| "dz"
			| "ec"
			| "ee"
			| "eg"
			| "eh"
			| "er"
			| "es"
			| "et"
			| "fi"
			| "fj"
			| "fk"
			| "fm"
			| "fo"
			| "fr"
			| "ga"
			| "gb"
			| "gd"
			| "ge"
			| "gf"
			| "gg"
			| "gh"
			| "gi"
			| "gl"
			| "gm"
			| "gn"
			| "gp"
			| "gq"
			| "gr"
			| "gs"
			| "gt"
			| "gu"
			| "gw"
			| "gy"
			| "hk"
			| "hm"
			| "hn"
			| "hr"
			| "ht"
			| "hu"
			| "id"
			| "ie"
			| "il"
			| "im"
			| "in"
			| "io"
			| "iq"
			| "ir"
			| "is"
			| "it"
			| "je"
			| "jm"
			| "jo"
			| "jp"
			| "ke"
			| "kg"
			| "kh"
			| "ki"
			| "km"
			| "kn"
			| "kp"
			| "kr"
			| "kw"
			| "ky"
			| "kz"
			| "la"
			| "lb"
			| "lc"
			| "li"
			| "lk"
			| "lr"
			| "ls"
			| "lt"
			| "lu"
			| "lv"
			| "ly"
			| "ma"
			| "mc"
			| "md"
			| "me"
			| "mf"
			| "mg"
			| "mh"
			| "mk"
			| "ml"
			| "mm"
			| "mn"
			| "mo"
			| "mp"
			| "mq"
			| "mr"
			| "ms"
			| "mt"
			| "mu"
			| "mv"
			| "mw"
			| "mx"
			| "my"
			| "mz"
			| "na"
			| "nc"
			| "ne"
			| "nf"
			| "ng"
			| "ni"
			| "nl"
			| "no"
			| "np"
			| "nr"
			| "nu"
			| "nz"
			| "om"
			| "pa"
			| "pe"
			| "pf"
			| "pg"
			| "ph"
			| "pk"
			| "pl"
			| "pm"
			| "pn"
			| "pr"
			| "ps"
			| "pt"
			| "pw"
			| "py"
			| "qa"
			| "re"
			| "ro"
			| "rs"
			| "ru"
			| "rw"
			| "sa"
			| "sb"
			| "sc"
			| "sd"
			| "se"
			| "sg"
			| "sh"
			| "si"
			| "sj"
			| "sk"
			| "sl"
			| "sm"
			| "sn"
			| "so"
			| "sr"
			| "ss"
			| "st"
			| "sv"
			| "sx"
			| "sy"
			| "sz"
			| "tc"
			| "td"
			| "tf"
			| "tg"
			| "th"
			| "tj"
			| "tk"
			| "tl"
			| "tm"
			| "tn"
			| "to"
			| "tr"
			| "tt"
			| "tv"
			| "tw"
			| "tz"
			| "ua"
			| "ug"
			| "um"
			| "us"
			| "uy"
			| "uz"
			| "va"
			| "vc"
			| "ve"
			| "vg"
			| "vi"
			| "vn"
			| "vu"
			| "wf"
			| "ws"
			| "ye"
			| "yt"
			| "za"
			| "zm"
			| "zw";
	};
	Iso4217CurrencyCode: {
		name: "Iso4217CurrencyCode";
		enumValues:
			| "AED"
			| "AFN"
			| "ALL"
			| "AMD"
			| "ANG"
			| "AOA"
			| "ARS"
			| "AUD"
			| "AWG"
			| "AZN"
			| "BAM"
			| "BBD"
			| "BDT"
			| "BGN"
			| "BHD"
			| "BIF"
			| "BMD"
			| "BND"
			| "BOB"
			| "BOV"
			| "BRL"
			| "BSD"
			| "BTN"
			| "BWP"
			| "BYN"
			| "BZD"
			| "CAD"
			| "CDF"
			| "CHE"
			| "CHF"
			| "CHW"
			| "CLF"
			| "CLP"
			| "CNY"
			| "COP"
			| "COU"
			| "CRC"
			| "CUP"
			| "CVE"
			| "CZK"
			| "DJF"
			| "DKK"
			| "DOP"
			| "DZD"
			| "EGP"
			| "ERN"
			| "ETB"
			| "EUR"
			| "FJD"
			| "FKP"
			| "GBP"
			| "GEL"
			| "GHS"
			| "GIP"
			| "GMD"
			| "GNF"
			| "GTQ"
			| "GYD"
			| "HKD"
			| "HNL"
			| "HTG"
			| "HUF"
			| "IDR"
			| "ILS"
			| "INR"
			| "IQD"
			| "IRR"
			| "ISK"
			| "JMD"
			| "JOD"
			| "JPY"
			| "KES"
			| "KGS"
			| "KHR"
			| "KMF"
			| "KPW"
			| "KRW"
			| "KWD"
			| "KYD"
			| "KZT"
			| "LAK"
			| "LBP"
			| "LKR"
			| "LRD"
			| "LSL"
			| "LYD"
			| "MAD"
			| "MDL"
			| "MGA"
			| "MKD"
			| "MMK"
			| "MNT"
			| "MOP"
			| "MRU"
			| "MUR"
			| "MVR"
			| "MWK"
			| "MXN"
			| "MXV"
			| "MYR"
			| "MZN"
			| "NAD"
			| "NGN"
			| "NIO"
			| "NOK"
			| "NPR"
			| "NZD"
			| "OMR"
			| "PAB"
			| "PEN"
			| "PGK"
			| "PHP"
			| "PKR"
			| "PLN"
			| "PYG"
			| "QAR"
			| "RON"
			| "RSD"
			| "RUB"
			| "RWF"
			| "SAR"
			| "SBD"
			| "SCR"
			| "SDG"
			| "SEK"
			| "SGD"
			| "SHP"
			| "SLE"
			| "SOS"
			| "SRD"
			| "SSP"
			| "STN"
			| "SVC"
			| "SYP"
			| "SZL"
			| "THB"
			| "TJS"
			| "TMT"
			| "TND"
			| "TOP"
			| "TRY"
			| "TTD"
			| "TWD"
			| "TZS"
			| "UAH"
			| "UGX"
			| "USD"
			| "USN"
			| "UYI"
			| "UYU"
			| "UYW"
			| "UZS"
			| "VED"
			| "VES"
			| "VND"
			| "VUV"
			| "WST"
			| "XAF"
			| "XAG"
			| "XAU"
			| "XBA"
			| "XBB"
			| "XBC"
			| "XBD"
			| "XCD"
			| "XDR"
			| "XOF"
			| "XPD"
			| "XPF"
			| "XPT"
			| "XSU"
			| "XTS"
			| "XUA"
			| "XXX"
			| "YER"
			| "ZAR"
			| "ZMW"
			| "ZWG";
	};
	Iso639Set1LanguageCode: {
		name: "Iso639Set1LanguageCode";
		enumValues:
			| "aa"
			| "ab"
			| "ae"
			| "af"
			| "ak"
			| "am"
			| "an"
			| "ar"
			| "as"
			| "av"
			| "ay"
			| "az"
			| "ba"
			| "be"
			| "bg"
			| "bi"
			| "bm"
			| "bn"
			| "bo"
			| "br"
			| "bs"
			| "ca"
			| "ce"
			| "ch"
			| "co"
			| "cr"
			| "cs"
			| "cu"
			| "cv"
			| "cy"
			| "da"
			| "de"
			| "dv"
			| "dz"
			| "ee"
			| "el"
			| "en"
			| "eo"
			| "es"
			| "et"
			| "eu"
			| "fa"
			| "ff"
			| "fi"
			| "fj"
			| "fo"
			| "fr"
			| "fy"
			| "ga"
			| "gd"
			| "gl"
			| "gn"
			| "gu"
			| "gv"
			| "ha"
			| "he"
			| "hi"
			| "ho"
			| "hr"
			| "ht"
			| "hu"
			| "hy"
			| "hz"
			| "ia"
			| "id"
			| "ie"
			| "ig"
			| "ii"
			| "ik"
			| "io"
			| "is"
			| "it"
			| "iu"
			| "ja"
			| "jv"
			| "ka"
			| "kg"
			| "ki"
			| "kj"
			| "kk"
			| "kl"
			| "km"
			| "kn"
			| "ko"
			| "kr"
			| "ks"
			| "ku"
			| "kv"
			| "kw"
			| "ky"
			| "la"
			| "lb"
			| "lg"
			| "li"
			| "ln"
			| "lo"
			| "lt"
			| "lu"
			| "lv"
			| "mg"
			| "mh"
			| "mi"
			| "mk"
			| "ml"
			| "mn"
			| "mr"
			| "ms"
			| "mt"
			| "my"
			| "na"
			| "nb"
			| "nd"
			| "ne"
			| "ng"
			| "nl"
			| "nn"
			| "no"
			| "nr"
			| "nv"
			| "ny"
			| "oc"
			| "oj"
			| "om"
			| "or"
			| "os"
			| "pa"
			| "pi"
			| "pl"
			| "ps"
			| "pt"
			| "qu"
			| "rm"
			| "rn"
			| "ro"
			| "ru"
			| "rw"
			| "sa"
			| "sc"
			| "sd"
			| "se"
			| "sg"
			| "si"
			| "sk"
			| "sl"
			| "sm"
			| "sn"
			| "so"
			| "sq"
			| "sr"
			| "ss"
			| "st"
			| "su"
			| "sv"
			| "sw"
			| "ta"
			| "te"
			| "tg"
			| "th"
			| "ti"
			| "tk"
			| "tl"
			| "tn"
			| "to"
			| "tr"
			| "ts"
			| "tt"
			| "tw"
			| "ty"
			| "ug"
			| "uk"
			| "ur"
			| "uz"
			| "ve"
			| "vi"
			| "vo"
			| "wa"
			| "wo"
			| "xh"
			| "yi"
			| "yo"
			| "za"
			| "zh"
			| "zu";
	};
	MembersRoleWhereInput: {
		kind: "INPUT_OBJECT";
		name: "MembersRoleWhereInput";
		isOneOf: false;
		inputFields: [
			{
				name: "equal";
				type: {
					kind: "ENUM";
					name: "OrganizationMembershipRole";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "notEqual";
				type: {
					kind: "ENUM";
					name: "OrganizationMembershipRole";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	MembersWhereInput: {
		kind: "INPUT_OBJECT";
		name: "MembersWhereInput";
		isOneOf: false;
		inputFields: [
			{
				name: "role";
				type: {
					kind: "INPUT_OBJECT";
					name: "MembersRoleWhereInput";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	Mutation: {
		kind: "OBJECT";
		name: "Mutation";
		fields: {
			blockUser: {
				name: "blockUser";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			createAdvertisement: {
				name: "createAdvertisement";
				type: { kind: "OBJECT"; name: "Advertisement"; ofType: null };
			};
			createAgendaFolder: {
				name: "createAgendaFolder";
				type: { kind: "OBJECT"; name: "AgendaFolder"; ofType: null };
			};
			createAgendaItem: {
				name: "createAgendaItem";
				type: { kind: "OBJECT"; name: "AgendaItem"; ofType: null };
			};
			createChat: {
				name: "createChat";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
			createChatMembership: {
				name: "createChatMembership";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
			createChatMessage: {
				name: "createChatMessage";
				type: { kind: "OBJECT"; name: "ChatMessage"; ofType: null };
			};
			createComment: {
				name: "createComment";
				type: { kind: "OBJECT"; name: "Comment"; ofType: null };
			};
			createCommentVote: {
				name: "createCommentVote";
				type: { kind: "OBJECT"; name: "Comment"; ofType: null };
			};
			createEvent: {
				name: "createEvent";
				type: { kind: "OBJECT"; name: "Event"; ofType: null };
			};
			createFund: {
				name: "createFund";
				type: { kind: "OBJECT"; name: "Fund"; ofType: null };
			};
			createFundCampaign: {
				name: "createFundCampaign";
				type: { kind: "OBJECT"; name: "FundCampaign"; ofType: null };
			};
			createFundCampaignPledge: {
				name: "createFundCampaignPledge";
				type: { kind: "OBJECT"; name: "FundCampaignPledge"; ofType: null };
			};
			createGetfileUrl: {
				name: "createGetfileUrl";
				type: { kind: "OBJECT"; name: "GetUrlResponse"; ofType: null };
			};
			createOrganization: {
				name: "createOrganization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			createOrganizationMembership: {
				name: "createOrganizationMembership";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			createPost: {
				name: "createPost";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
			createPostVote: {
				name: "createPostVote";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
			createPresignedUrl: {
				name: "createPresignedUrl";
				type: { kind: "OBJECT"; name: "UploadUrlResponse"; ofType: null };
			};
			createTag: {
				name: "createTag";
				type: { kind: "OBJECT"; name: "Tag"; ofType: null };
			};
			createTagFolder: {
				name: "createTagFolder";
				type: { kind: "OBJECT"; name: "TagFolder"; ofType: null };
			};
			createUser: {
				name: "createUser";
				type: { kind: "OBJECT"; name: "AuthenticationPayload"; ofType: null };
			};
			createVenue: {
				name: "createVenue";
				type: { kind: "OBJECT"; name: "Venue"; ofType: null };
			};
			createVenueBooking: {
				name: "createVenueBooking";
				type: { kind: "OBJECT"; name: "Venue"; ofType: null };
			};
			deleteAdvertisement: {
				name: "deleteAdvertisement";
				type: { kind: "OBJECT"; name: "Advertisement"; ofType: null };
			};
			deleteAgendaFolder: {
				name: "deleteAgendaFolder";
				type: { kind: "OBJECT"; name: "AgendaFolder"; ofType: null };
			};
			deleteAgendaItem: {
				name: "deleteAgendaItem";
				type: { kind: "OBJECT"; name: "AgendaItem"; ofType: null };
			};
			deleteChat: {
				name: "deleteChat";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
			deleteChatMembership: {
				name: "deleteChatMembership";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
			deleteChatMessage: {
				name: "deleteChatMessage";
				type: { kind: "OBJECT"; name: "ChatMessage"; ofType: null };
			};
			deleteComment: {
				name: "deleteComment";
				type: { kind: "OBJECT"; name: "Comment"; ofType: null };
			};
			deleteCommentVote: {
				name: "deleteCommentVote";
				type: { kind: "OBJECT"; name: "Comment"; ofType: null };
			};
			deleteCurrentUser: {
				name: "deleteCurrentUser";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			deleteEvent: {
				name: "deleteEvent";
				type: { kind: "OBJECT"; name: "Event"; ofType: null };
			};
			deleteFund: {
				name: "deleteFund";
				type: { kind: "OBJECT"; name: "Fund"; ofType: null };
			};
			deleteFundCampaign: {
				name: "deleteFundCampaign";
				type: { kind: "OBJECT"; name: "FundCampaign"; ofType: null };
			};
			deleteFundCampaignPledge: {
				name: "deleteFundCampaignPledge";
				type: { kind: "OBJECT"; name: "FundCampaignPledge"; ofType: null };
			};
			deleteOrganization: {
				name: "deleteOrganization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			deleteOrganizationMembership: {
				name: "deleteOrganizationMembership";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			deletePost: {
				name: "deletePost";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
			deletePostVote: {
				name: "deletePostVote";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
			deleteTag: {
				name: "deleteTag";
				type: { kind: "OBJECT"; name: "Tag"; ofType: null };
			};
			deleteTagFolder: {
				name: "deleteTagFolder";
				type: { kind: "OBJECT"; name: "TagFolder"; ofType: null };
			};
			deleteUser: {
				name: "deleteUser";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			deleteVenue: {
				name: "deleteVenue";
				type: { kind: "OBJECT"; name: "Venue"; ofType: null };
			};
			deleteVenueBooking: {
				name: "deleteVenueBooking";
				type: { kind: "OBJECT"; name: "Venue"; ofType: null };
			};
			signUp: {
				name: "signUp";
				type: { kind: "OBJECT"; name: "AuthenticationPayload"; ofType: null };
			};
			unblockUser: {
				name: "unblockUser";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			updateAdvertisement: {
				name: "updateAdvertisement";
				type: { kind: "OBJECT"; name: "Advertisement"; ofType: null };
			};
			updateAgendaFolder: {
				name: "updateAgendaFolder";
				type: { kind: "OBJECT"; name: "AgendaFolder"; ofType: null };
			};
			updateAgendaItem: {
				name: "updateAgendaItem";
				type: { kind: "OBJECT"; name: "AgendaItem"; ofType: null };
			};
			updateChat: {
				name: "updateChat";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
			updateChatMembership: {
				name: "updateChatMembership";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
			updateChatMessage: {
				name: "updateChatMessage";
				type: { kind: "OBJECT"; name: "ChatMessage"; ofType: null };
			};
			updateComment: {
				name: "updateComment";
				type: { kind: "OBJECT"; name: "Comment"; ofType: null };
			};
			updateCommentVote: {
				name: "updateCommentVote";
				type: { kind: "OBJECT"; name: "Comment"; ofType: null };
			};
			updateCommunity: {
				name: "updateCommunity";
				type: { kind: "OBJECT"; name: "Community"; ofType: null };
			};
			updateCurrentUser: {
				name: "updateCurrentUser";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			updateEvent: {
				name: "updateEvent";
				type: { kind: "OBJECT"; name: "Event"; ofType: null };
			};
			updateFund: {
				name: "updateFund";
				type: { kind: "OBJECT"; name: "Fund"; ofType: null };
			};
			updateFundCampaign: {
				name: "updateFundCampaign";
				type: { kind: "OBJECT"; name: "FundCampaign"; ofType: null };
			};
			updateFundCampaignPledge: {
				name: "updateFundCampaignPledge";
				type: { kind: "OBJECT"; name: "FundCampaignPledge"; ofType: null };
			};
			updateOrganization: {
				name: "updateOrganization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			updateOrganizationMembership: {
				name: "updateOrganizationMembership";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			updatePost: {
				name: "updatePost";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
			updatePostVote: {
				name: "updatePostVote";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
			updateTag: {
				name: "updateTag";
				type: { kind: "OBJECT"; name: "Tag"; ofType: null };
			};
			updateTagFolder: {
				name: "updateTagFolder";
				type: { kind: "OBJECT"; name: "TagFolder"; ofType: null };
			};
			updateUser: {
				name: "updateUser";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			updateVenue: {
				name: "updateVenue";
				type: { kind: "OBJECT"; name: "Venue"; ofType: null };
			};
		};
	};
	MutationBlockUserInput: {
		kind: "INPUT_OBJECT";
		name: "MutationBlockUserInput";
		isOneOf: false;
		inputFields: [
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "userId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateAdvertisementInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateAdvertisementInput";
		isOneOf: false;
		inputFields: [
			{
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Upload"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "startAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "AdvertisementType"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateAgendaFolderInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateAgendaFolderInput";
		isOneOf: false;
		inputFields: [
			{
				name: "eventId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "isAgendaItemFolder";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "parentFolderId";
				type: { kind: "SCALAR"; name: "ID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationCreateAgendaItemInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateAgendaItemInput";
		isOneOf: false;
		inputFields: [
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "duration";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "folderId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "key";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "AgendaItemType"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateChatInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateChatInput";
		isOneOf: false;
		inputFields: [
			{
				name: "avatar";
				type: { kind: "SCALAR"; name: "Upload"; ofType: null };
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateChatMembershipInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateChatMembershipInput";
		isOneOf: false;
		inputFields: [
			{
				name: "chatId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "memberId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "role";
				type: { kind: "ENUM"; name: "ChatMembershipRole"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationCreateChatMessageInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateChatMessageInput";
		isOneOf: false;
		inputFields: [
			{
				name: "body";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "chatId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "parentMessageId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateCommentInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateCommentInput";
		isOneOf: false;
		inputFields: [
			{
				name: "body";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "postId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateCommentVoteInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateCommentVoteInput";
		isOneOf: false;
		inputFields: [
			{
				name: "commentId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "CommentVoteType"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateEventInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateEventInput";
		isOneOf: false;
		inputFields: [
			{
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Upload"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "startAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateFundCampaignInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateFundCampaignInput";
		isOneOf: false;
		inputFields: [
			{
				name: "currencyCode";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "Iso4217CurrencyCode"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "endAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "fundId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "goalAmount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "startAt";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateFundCampaignPledgeInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateFundCampaignPledgeInput";
		isOneOf: false;
		inputFields: [
			{
				name: "amount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "campaignId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "note";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "pledgerId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateFundInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateFundInput";
		isOneOf: false;
		inputFields: [
			{
				name: "isTaxDeductible";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateGetfileUrlInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateGetfileUrlInput";
		isOneOf: false;
		inputFields: [
			{
				name: "objectName";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateOrganizationInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateOrganizationInput";
		isOneOf: false;
		inputFields: [
			{
				name: "addressLine1";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "addressLine2";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "avatar";
				type: { kind: "SCALAR"; name: "Upload"; ofType: null };
				defaultValue: null;
			},
			{
				name: "city";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "countryCode";
				type: { kind: "ENUM"; name: "Iso3166Alpha2CountryCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "postalCode";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "state";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationCreateOrganizationMembershipInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateOrganizationMembershipInput";
		isOneOf: false;
		inputFields: [
			{
				name: "memberId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "role";
				type: {
					kind: "ENUM";
					name: "OrganizationMembershipRole";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	MutationCreatePostInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreatePostInput";
		isOneOf: false;
		inputFields: [
			{
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "FileMetadataInput";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "caption";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "isPinned";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreatePostVoteInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreatePostVoteInput";
		isOneOf: false;
		inputFields: [
			{
				name: "postId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "PostVoteType"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreatePresignedUrlInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreatePresignedUrlInput";
		isOneOf: false;
		inputFields: [
			{
				name: "fileHash";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "fileName";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "objectName";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateTagFolderInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateTagFolderInput";
		isOneOf: false;
		inputFields: [
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "parentFolderId";
				type: { kind: "SCALAR"; name: "ID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationCreateTagInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateTagInput";
		isOneOf: false;
		inputFields: [
			{
				name: "folderId";
				type: { kind: "SCALAR"; name: "ID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateUserInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateUserInput";
		isOneOf: false;
		inputFields: [
			{
				name: "addressLine1";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "addressLine2";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "avatar";
				type: { kind: "SCALAR"; name: "Upload"; ofType: null };
				defaultValue: null;
			},
			{
				name: "birthDate";
				type: { kind: "SCALAR"; name: "Date"; ofType: null };
				defaultValue: null;
			},
			{
				name: "city";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "countryCode";
				type: { kind: "ENUM"; name: "Iso3166Alpha2CountryCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "educationGrade";
				type: { kind: "ENUM"; name: "UserEducationGrade"; ofType: null };
				defaultValue: null;
			},
			{
				name: "emailAddress";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "EmailAddress"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "employmentStatus";
				type: { kind: "ENUM"; name: "UserEmploymentStatus"; ofType: null };
				defaultValue: null;
			},
			{
				name: "homePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
			{
				name: "isEmailAddressVerified";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "maritalStatus";
				type: { kind: "ENUM"; name: "UserMaritalStatus"; ofType: null };
				defaultValue: null;
			},
			{
				name: "mobilePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "natalSex";
				type: { kind: "ENUM"; name: "UserNatalSex"; ofType: null };
				defaultValue: null;
			},
			{
				name: "naturalLanguageCode";
				type: { kind: "ENUM"; name: "Iso639Set1LanguageCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "password";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "postalCode";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "role";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "UserRole"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "state";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "workPhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationCreateVenueBookingInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateVenueBookingInput";
		isOneOf: false;
		inputFields: [
			{
				name: "eventId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "venueId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationCreateVenueInput: {
		kind: "INPUT_OBJECT";
		name: "MutationCreateVenueInput";
		isOneOf: false;
		inputFields: [
			{
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "Upload"; ofType: null };
					};
				};
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteAdvertisementInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteAdvertisementInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteAgendaFolderInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteAgendaFolderInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteAgendaItemInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteAgendaItemInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteChatInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteChatInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteChatMembershipInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteChatMembershipInput";
		isOneOf: false;
		inputFields: [
			{
				name: "chatId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "memberId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteChatMessageInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteChatMessageInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteCommentInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteCommentInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteCommentVoteInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteCommentVoteInput";
		isOneOf: false;
		inputFields: [
			{
				name: "commentId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "creatorId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteEventInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteEventInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteFundCampaignInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteFundCampaignInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteFundCampaignPledgeInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteFundCampaignPledgeInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteFundInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteFundInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteOrganizationInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteOrganizationInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteOrganizationMembershipInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteOrganizationMembershipInput";
		isOneOf: false;
		inputFields: [
			{
				name: "memberId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeletePostInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeletePostInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeletePostVoteInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeletePostVoteInput";
		isOneOf: false;
		inputFields: [
			{
				name: "creatorId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "postId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteTagFolderInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteTagFolderInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteTagInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteTagInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteUserInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteUserInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteVenueBookingInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteVenueBookingInput";
		isOneOf: false;
		inputFields: [
			{
				name: "eventId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "venueId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationDeleteVenueInput: {
		kind: "INPUT_OBJECT";
		name: "MutationDeleteVenueInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationSignUpInput: {
		kind: "INPUT_OBJECT";
		name: "MutationSignUpInput";
		isOneOf: false;
		inputFields: [
			{
				name: "addressLine1";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "addressLine2";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "birthDate";
				type: { kind: "SCALAR"; name: "Date"; ofType: null };
				defaultValue: null;
			},
			{
				name: "city";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "countryCode";
				type: { kind: "ENUM"; name: "Iso3166Alpha2CountryCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "educationGrade";
				type: { kind: "ENUM"; name: "UserEducationGrade"; ofType: null };
				defaultValue: null;
			},
			{
				name: "emailAddress";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "EmailAddress"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "employmentStatus";
				type: { kind: "ENUM"; name: "UserEmploymentStatus"; ofType: null };
				defaultValue: null;
			},
			{
				name: "homePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
			{
				name: "maritalStatus";
				type: { kind: "ENUM"; name: "UserMaritalStatus"; ofType: null };
				defaultValue: null;
			},
			{
				name: "mobilePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "natalSex";
				type: { kind: "ENUM"; name: "UserNatalSex"; ofType: null };
				defaultValue: null;
			},
			{
				name: "naturalLanguageCode";
				type: { kind: "ENUM"; name: "Iso639Set1LanguageCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "password";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "postalCode";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "state";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "workPhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUnblockUserInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUnblockUserInput";
		isOneOf: false;
		inputFields: [
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "userId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationUpdateAdvertisementInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateAdvertisementInput";
		isOneOf: false;
		inputFields: [
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "startAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "type";
				type: { kind: "ENUM"; name: "AdvertisementType"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateAgendaFolderInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateAgendaFolderInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "parentFolderId";
				type: { kind: "SCALAR"; name: "ID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateAgendaItemInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateAgendaItemInput";
		isOneOf: false;
		inputFields: [
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "duration";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "folderId";
				type: { kind: "SCALAR"; name: "ID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "key";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateChatInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateChatInput";
		isOneOf: false;
		inputFields: [
			{
				name: "avatar";
				type: { kind: "SCALAR"; name: "Upload"; ofType: null };
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateChatMembershipInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateChatMembershipInput";
		isOneOf: false;
		inputFields: [
			{
				name: "chatId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "memberId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "role";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "ChatMembershipRole"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationUpdateChatMessageInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateChatMessageInput";
		isOneOf: false;
		inputFields: [
			{
				name: "body";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationUpdateCommentInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateCommentInput";
		isOneOf: false;
		inputFields: [
			{
				name: "body";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationUpdateCommentVoteInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateCommentVoteInput";
		isOneOf: false;
		inputFields: [
			{
				name: "commentId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "CommentVoteType"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationUpdateCommunityInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateCommunityInput";
		isOneOf: false;
		inputFields: [
			{
				name: "facebookURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "githubURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "inactivityTimeoutDuration";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "instagramURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "linkedinURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "logo";
				type: { kind: "SCALAR"; name: "Upload"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "redditURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "slackURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "websiteURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "xURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "youtubeURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateCurrentUserInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateCurrentUserInput";
		isOneOf: false;
		inputFields: [
			{
				name: "addressLine1";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "addressLine2";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "avatar";
				type: { kind: "SCALAR"; name: "Upload"; ofType: null };
				defaultValue: null;
			},
			{
				name: "birthDate";
				type: { kind: "SCALAR"; name: "Date"; ofType: null };
				defaultValue: null;
			},
			{
				name: "city";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "countryCode";
				type: { kind: "ENUM"; name: "Iso3166Alpha2CountryCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "educationGrade";
				type: { kind: "ENUM"; name: "UserEducationGrade"; ofType: null };
				defaultValue: null;
			},
			{
				name: "emailAddress";
				type: { kind: "SCALAR"; name: "EmailAddress"; ofType: null };
				defaultValue: null;
			},
			{
				name: "employmentStatus";
				type: { kind: "ENUM"; name: "UserEmploymentStatus"; ofType: null };
				defaultValue: null;
			},
			{
				name: "homePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
			{
				name: "maritalStatus";
				type: { kind: "ENUM"; name: "UserMaritalStatus"; ofType: null };
				defaultValue: null;
			},
			{
				name: "mobilePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "natalSex";
				type: { kind: "ENUM"; name: "UserNatalSex"; ofType: null };
				defaultValue: null;
			},
			{
				name: "naturalLanguageCode";
				type: { kind: "ENUM"; name: "Iso639Set1LanguageCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "password";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "postalCode";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "state";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "workPhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateEventInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateEventInput";
		isOneOf: false;
		inputFields: [
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "endAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "startAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateFundCampaignInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateFundCampaignInput";
		isOneOf: false;
		inputFields: [
			{
				name: "endAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				defaultValue: null;
			},
			{
				name: "goalAmount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "startAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateFundCampaignPledgeInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateFundCampaignPledgeInput";
		isOneOf: false;
		inputFields: [
			{
				name: "amount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "note";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateFundInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateFundInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "isTaxDeductible";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateOrganizationInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateOrganizationInput";
		isOneOf: false;
		inputFields: [
			{
				name: "addressLine1";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "addressLine2";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "avatar";
				type: { kind: "SCALAR"; name: "Upload"; ofType: null };
				defaultValue: null;
			},
			{
				name: "city";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "countryCode";
				type: { kind: "ENUM"; name: "Iso3166Alpha2CountryCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "postalCode";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "state";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateOrganizationMembershipInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateOrganizationMembershipInput";
		isOneOf: false;
		inputFields: [
			{
				name: "memberId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "organizationId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "role";
				type: {
					kind: "ENUM";
					name: "OrganizationMembershipRole";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	MutationUpdatePostInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdatePostInput";
		isOneOf: false;
		inputFields: [
			{
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: {
							kind: "INPUT_OBJECT";
							name: "AttachmentInput";
							ofType: null;
						};
					};
				};
				defaultValue: null;
			},
			{
				name: "caption";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "isPinned";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdatePostVoteInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdatePostVoteInput";
		isOneOf: false;
		inputFields: [
			{
				name: "postId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "PostVoteType"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	MutationUpdateTagFolderInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateTagFolderInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "parentFolderId";
				type: { kind: "SCALAR"; name: "ID"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateTagInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateTagInput";
		isOneOf: false;
		inputFields: [
			{
				name: "folderId";
				type: { kind: "SCALAR"; name: "ID"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateUserInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateUserInput";
		isOneOf: false;
		inputFields: [
			{
				name: "addressLine1";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "addressLine2";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "avatar";
				type: { kind: "SCALAR"; name: "Upload"; ofType: null };
				defaultValue: null;
			},
			{
				name: "birthDate";
				type: { kind: "SCALAR"; name: "Date"; ofType: null };
				defaultValue: null;
			},
			{
				name: "city";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "countryCode";
				type: { kind: "ENUM"; name: "Iso3166Alpha2CountryCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "educationGrade";
				type: { kind: "ENUM"; name: "UserEducationGrade"; ofType: null };
				defaultValue: null;
			},
			{
				name: "emailAddress";
				type: { kind: "SCALAR"; name: "EmailAddress"; ofType: null };
				defaultValue: null;
			},
			{
				name: "employmentStatus";
				type: { kind: "ENUM"; name: "UserEmploymentStatus"; ofType: null };
				defaultValue: null;
			},
			{
				name: "homePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "isEmailAddressVerified";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				defaultValue: null;
			},
			{
				name: "maritalStatus";
				type: { kind: "ENUM"; name: "UserMaritalStatus"; ofType: null };
				defaultValue: null;
			},
			{
				name: "mobilePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "natalSex";
				type: { kind: "ENUM"; name: "UserNatalSex"; ofType: null };
				defaultValue: null;
			},
			{
				name: "naturalLanguageCode";
				type: { kind: "ENUM"; name: "Iso639Set1LanguageCode"; ofType: null };
				defaultValue: null;
			},
			{
				name: "password";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "postalCode";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "role";
				type: { kind: "ENUM"; name: "UserRole"; ofType: null };
				defaultValue: null;
			},
			{
				name: "state";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "workPhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
				defaultValue: null;
			},
		];
	};
	MutationUpdateVenueInput: {
		kind: "INPUT_OBJECT";
		name: "MutationUpdateVenueInput";
		isOneOf: false;
		inputFields: [
			{
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	Organization: {
		kind: "OBJECT";
		name: "Organization";
		fields: {
			addressLine1: {
				name: "addressLine1";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			addressLine2: {
				name: "addressLine2";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			advertisements: {
				name: "advertisements";
				type: {
					kind: "OBJECT";
					name: "OrganizationAdvertisementsConnection";
					ofType: null;
				};
			};
			avatarMimeType: {
				name: "avatarMimeType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			avatarURL: {
				name: "avatarURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			blockedUsers: {
				name: "blockedUsers";
				type: {
					kind: "OBJECT";
					name: "OrganizationBlockedUsersConnection";
					ofType: null;
				};
			};
			chats: {
				name: "chats";
				type: {
					kind: "OBJECT";
					name: "OrganizationChatsConnection";
					ofType: null;
				};
			};
			city: {
				name: "city";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			countryCode: {
				name: "countryCode";
				type: { kind: "ENUM"; name: "Iso3166Alpha2CountryCode"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			events: {
				name: "events";
				type: {
					kind: "OBJECT";
					name: "OrganizationEventsConnection";
					ofType: null;
				};
			};
			funds: {
				name: "funds";
				type: {
					kind: "OBJECT";
					name: "OrganizationFundsConnection";
					ofType: null;
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			members: {
				name: "members";
				type: {
					kind: "OBJECT";
					name: "OrganizationMembersConnection";
					ofType: null;
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			pinnedPosts: {
				name: "pinnedPosts";
				type: {
					kind: "OBJECT";
					name: "OrganizationPinnedPostsConnection";
					ofType: null;
				};
			};
			pinnedPostsCount: {
				name: "pinnedPostsCount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			postalCode: {
				name: "postalCode";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			posts: {
				name: "posts";
				type: {
					kind: "OBJECT";
					name: "OrganizationPostsConnection";
					ofType: null;
				};
			};
			postsCount: {
				name: "postsCount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			state: {
				name: "state";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			tagFolders: {
				name: "tagFolders";
				type: {
					kind: "OBJECT";
					name: "OrganizationTagFoldersConnection";
					ofType: null;
				};
			};
			tags: {
				name: "tags";
				type: {
					kind: "OBJECT";
					name: "OrganizationTagsConnection";
					ofType: null;
				};
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			venues: {
				name: "venues";
				type: {
					kind: "OBJECT";
					name: "OrganizationVenuesConnection";
					ofType: null;
				};
			};
		};
	};
	OrganizationAdvertisementsConnection: {
		kind: "OBJECT";
		name: "OrganizationAdvertisementsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationAdvertisementsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationAdvertisementsConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationAdvertisementsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Advertisement"; ofType: null };
			};
		};
	};
	OrganizationBlockedUsersConnection: {
		kind: "OBJECT";
		name: "OrganizationBlockedUsersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationBlockedUsersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationBlockedUsersConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationBlockedUsersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	OrganizationChatsConnection: {
		kind: "OBJECT";
		name: "OrganizationChatsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationChatsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationChatsConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationChatsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
		};
	};
	OrganizationEventsConnection: {
		kind: "OBJECT";
		name: "OrganizationEventsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationEventsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationEventsConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationEventsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Event"; ofType: null };
			};
		};
	};
	OrganizationFundsConnection: {
		kind: "OBJECT";
		name: "OrganizationFundsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationFundsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationFundsConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationFundsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Fund"; ofType: null };
			};
		};
	};
	OrganizationMembersConnection: {
		kind: "OBJECT";
		name: "OrganizationMembersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationMembersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationMembersConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationMembersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	OrganizationMembershipRole: {
		name: "OrganizationMembershipRole";
		enumValues: "administrator" | "regular";
	};
	OrganizationPinnedPostsConnection: {
		kind: "OBJECT";
		name: "OrganizationPinnedPostsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationPinnedPostsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationPinnedPostsConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationPinnedPostsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
		};
	};
	OrganizationPostsConnection: {
		kind: "OBJECT";
		name: "OrganizationPostsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationPostsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationPostsConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationPostsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
		};
	};
	OrganizationTagFoldersConnection: {
		kind: "OBJECT";
		name: "OrganizationTagFoldersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationTagFoldersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationTagFoldersConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationTagFoldersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "TagFolder"; ofType: null };
			};
		};
	};
	OrganizationTagsConnection: {
		kind: "OBJECT";
		name: "OrganizationTagsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationTagsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationTagsConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationTagsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Tag"; ofType: null };
			};
		};
	};
	OrganizationVenuesConnection: {
		kind: "OBJECT";
		name: "OrganizationVenuesConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "OrganizationVenuesConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	OrganizationVenuesConnectionEdge: {
		kind: "OBJECT";
		name: "OrganizationVenuesConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Venue"; ofType: null };
			};
		};
	};
	PageInfo: {
		kind: "OBJECT";
		name: "PageInfo";
		fields: {
			endCursor: {
				name: "endCursor";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			hasNextPage: {
				name: "hasNextPage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			hasPreviousPage: {
				name: "hasPreviousPage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			startCursor: {
				name: "startCursor";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	PhoneNumber: unknown;
	Post: {
		kind: "OBJECT";
		name: "Post";
		fields: {
			attachments: {
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "PostAttachment"; ofType: null };
					};
				};
			};
			caption: {
				name: "caption";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			comments: {
				name: "comments";
				type: { kind: "OBJECT"; name: "PostCommentsConnection"; ofType: null };
			};
			commentsCount: {
				name: "commentsCount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			downVoters: {
				name: "downVoters";
				type: {
					kind: "OBJECT";
					name: "PostDownVotersConnection";
					ofType: null;
				};
			};
			downVotesCount: {
				name: "downVotesCount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			pinnedAt: {
				name: "pinnedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			upVoters: {
				name: "upVoters";
				type: { kind: "OBJECT"; name: "PostUpVotersConnection"; ofType: null };
			};
			upVotesCount: {
				name: "upVotesCount";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	PostAttachment: {
		kind: "OBJECT";
		name: "PostAttachment";
		fields: {
			fileHash: {
				name: "fileHash";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			mimeType: {
				name: "mimeType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			objectName: {
				name: "objectName";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			url: {
				name: "url";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	PostAttachmentMimeType: {
		name: "PostAttachmentMimeType";
		enumValues:
			| "IMAGE_AVIF"
			| "IMAGE_JPEG"
			| "IMAGE_PNG"
			| "IMAGE_WEBP"
			| "VIDEO_MP4"
			| "VIDEO_WEBM";
	};
	PostCommentsConnection: {
		kind: "OBJECT";
		name: "PostCommentsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "PostCommentsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	PostCommentsConnectionEdge: {
		kind: "OBJECT";
		name: "PostCommentsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Comment"; ofType: null };
			};
		};
	};
	PostDownVotersConnection: {
		kind: "OBJECT";
		name: "PostDownVotersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "PostDownVotersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	PostDownVotersConnectionEdge: {
		kind: "OBJECT";
		name: "PostDownVotersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	PostUpVotersConnection: {
		kind: "OBJECT";
		name: "PostUpVotersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "PostUpVotersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	PostUpVotersConnectionEdge: {
		kind: "OBJECT";
		name: "PostUpVotersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	PostVoteType: { name: "PostVoteType"; enumValues: "down_vote" | "up_vote" };
	Query: {
		kind: "OBJECT";
		name: "Query";
		fields: {
			advertisement: {
				name: "advertisement";
				type: { kind: "OBJECT"; name: "Advertisement"; ofType: null };
			};
			agendaFolder: {
				name: "agendaFolder";
				type: { kind: "OBJECT"; name: "AgendaFolder"; ofType: null };
			};
			agendaItem: {
				name: "agendaItem";
				type: { kind: "OBJECT"; name: "AgendaItem"; ofType: null };
			};
			allUsers: {
				name: "allUsers";
				type: { kind: "OBJECT"; name: "QueryAllUsersConnection"; ofType: null };
			};
			chat: {
				name: "chat";
				type: { kind: "OBJECT"; name: "Chat"; ofType: null };
			};
			chatMessage: {
				name: "chatMessage";
				type: { kind: "OBJECT"; name: "ChatMessage"; ofType: null };
			};
			comment: {
				name: "comment";
				type: { kind: "OBJECT"; name: "Comment"; ofType: null };
			};
			community: {
				name: "community";
				type: { kind: "OBJECT"; name: "Community"; ofType: null };
			};
			currentUser: {
				name: "currentUser";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			event: {
				name: "event";
				type: { kind: "OBJECT"; name: "Event"; ofType: null };
			};
			fund: {
				name: "fund";
				type: { kind: "OBJECT"; name: "Fund"; ofType: null };
			};
			fundCampaign: {
				name: "fundCampaign";
				type: { kind: "OBJECT"; name: "FundCampaign"; ofType: null };
			};
			fundCampaignPledge: {
				name: "fundCampaignPledge";
				type: { kind: "OBJECT"; name: "FundCampaignPledge"; ofType: null };
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			organizations: {
				name: "organizations";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Organization"; ofType: null };
					};
				};
			};
			post: {
				name: "post";
				type: { kind: "OBJECT"; name: "Post"; ofType: null };
			};
			postsByOrganization: {
				name: "postsByOrganization";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Post"; ofType: null };
					};
				};
			};
			renewAuthenticationToken: {
				name: "renewAuthenticationToken";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			signIn: {
				name: "signIn";
				type: { kind: "OBJECT"; name: "AuthenticationPayload"; ofType: null };
			};
			tag: { name: "tag"; type: { kind: "OBJECT"; name: "Tag"; ofType: null } };
			tagFolder: {
				name: "tagFolder";
				type: { kind: "OBJECT"; name: "TagFolder"; ofType: null };
			};
			user: {
				name: "user";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			venue: {
				name: "venue";
				type: { kind: "OBJECT"; name: "Venue"; ofType: null };
			};
		};
	};
	QueryAdvertisementInput: {
		kind: "INPUT_OBJECT";
		name: "QueryAdvertisementInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryAgendaFolderInput: {
		kind: "INPUT_OBJECT";
		name: "QueryAgendaFolderInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryAgendaItemInput: {
		kind: "INPUT_OBJECT";
		name: "QueryAgendaItemInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryAllUsersConnection: {
		kind: "OBJECT";
		name: "QueryAllUsersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "QueryAllUsersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	QueryAllUsersConnectionEdge: {
		kind: "OBJECT";
		name: "QueryAllUsersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	QueryAllUsersWhereInput: {
		kind: "INPUT_OBJECT";
		name: "QueryAllUsersWhereInput";
		isOneOf: false;
		inputFields: [
			{
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
				defaultValue: null;
			},
		];
	};
	QueryChatInput: {
		kind: "INPUT_OBJECT";
		name: "QueryChatInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryChatMessageInput: {
		kind: "INPUT_OBJECT";
		name: "QueryChatMessageInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryCommentInput: {
		kind: "INPUT_OBJECT";
		name: "QueryCommentInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryEventInput: {
		kind: "INPUT_OBJECT";
		name: "QueryEventInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryFundCampaignInput: {
		kind: "INPUT_OBJECT";
		name: "QueryFundCampaignInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryFundCampaignPledgeInput: {
		kind: "INPUT_OBJECT";
		name: "QueryFundCampaignPledgeInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryPledgeWhereInput: {
		kind: "INPUT_OBJECT";
		name: "QueryPledgeWhereInput";
		isOneOf: false;
		inputFields: [
			{
				name: "firstName_contains";
				type: {
					kind: "SCALAR";
					name: "String";
					ofType: null;
				};
				defaultValue: null;
			},
			{
				name: "name_contains";
				type: {
					kind: "SCALAR";
					name: "String";
					ofType: null;
				};
				defaultValue: null;
			},
		];
	};
	QueryPledgeOrderByInput: {
		kind: "ENUM";
		name: "QueryPledgeOrderByInput";
		description: "Sorting criteria, e.g., 'amount_ASC', 'amount_DESC', 'endDate_ASC', 'endDate_DESC'";
		enumValues: [
			{ name: "amount_ASC"; isDeprecated: false; deprecationReason: null },
			{ name: "amount_DESC"; isDeprecated: false; deprecationReason: null },
			{ name: "endDate_ASC"; isDeprecated: false; deprecationReason: null },
			{ name: "endDate_DESC"; isDeprecated: false; deprecationReason: null },
		];
	};
	QueryFundInput: {
		kind: "INPUT_OBJECT";
		name: "QueryFundInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryOrganizationInput: {
		kind: "INPUT_OBJECT";
		name: "QueryOrganizationInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryPostInput: {
		kind: "INPUT_OBJECT";
		name: "QueryPostInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QuerySignInInput: {
		kind: "INPUT_OBJECT";
		name: "QuerySignInInput";
		isOneOf: false;
		inputFields: [
			{
				name: "emailAddress";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "EmailAddress"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "password";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryTagFolderInput: {
		kind: "INPUT_OBJECT";
		name: "QueryTagFolderInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryTagInput: {
		kind: "INPUT_OBJECT";
		name: "QueryTagInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryUserInput: {
		kind: "INPUT_OBJECT";
		name: "QueryUserInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	QueryVenueInput: {
		kind: "INPUT_OBJECT";
		name: "QueryVenueInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	String: unknown;
	Subscription: {
		kind: "OBJECT";
		name: "Subscription";
		fields: {
			chatMessageCreate: {
				name: "chatMessageCreate";
				type: { kind: "OBJECT"; name: "ChatMessage"; ofType: null };
			};
		};
	};
	SubscriptionChatMessageCreateInput: {
		kind: "INPUT_OBJECT";
		name: "SubscriptionChatMessageCreateInput";
		isOneOf: false;
		inputFields: [
			{
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	Tag: {
		kind: "OBJECT";
		name: "Tag";
		fields: {
			assignees: {
				name: "assignees";
				type: { kind: "OBJECT"; name: "TagAssigneesConnection"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			folder: {
				name: "folder";
				type: { kind: "OBJECT"; name: "TagFolder"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	TagAssigneesConnection: {
		kind: "OBJECT";
		name: "TagAssigneesConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "TagAssigneesConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	TagAssigneesConnectionEdge: {
		kind: "OBJECT";
		name: "TagAssigneesConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	TagFolder: {
		kind: "OBJECT";
		name: "TagFolder";
		fields: {
			childFolders: {
				name: "childFolders";
				type: {
					kind: "OBJECT";
					name: "TagFolderChildFoldersConnection";
					ofType: null;
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			parentFolder: {
				name: "parentFolder";
				type: { kind: "OBJECT"; name: "TagFolder"; ofType: null };
			};
			tags: {
				name: "tags";
				type: { kind: "OBJECT"; name: "TagFolderTagsConnection"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	TagFolderChildFoldersConnection: {
		kind: "OBJECT";
		name: "TagFolderChildFoldersConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "TagFolderChildFoldersConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	TagFolderChildFoldersConnectionEdge: {
		kind: "OBJECT";
		name: "TagFolderChildFoldersConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "TagFolder"; ofType: null };
			};
		};
	};
	TagFolderTagsConnection: {
		kind: "OBJECT";
		name: "TagFolderTagsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "TagFolderTagsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	TagFolderTagsConnectionEdge: {
		kind: "OBJECT";
		name: "TagFolderTagsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Tag"; ofType: null };
			};
		};
	};
	Upload: unknown;
	UploadUrlResponse: {
		kind: "OBJECT";
		name: "UploadUrlResponse";
		fields: {
			objectName: {
				name: "objectName";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			presignedUrl: {
				name: "presignedUrl";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			requiresUpload: {
				name: "requiresUpload";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
		};
	};
	User: {
		kind: "OBJECT";
		name: "User";
		fields: {
			addressLine1: {
				name: "addressLine1";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			addressLine2: {
				name: "addressLine2";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			avatarMimeType: {
				name: "avatarMimeType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			avatarURL: {
				name: "avatarURL";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			birthDate: {
				name: "birthDate";
				type: { kind: "SCALAR"; name: "Date"; ofType: null };
			};
			city: {
				name: "city";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			countryCode: {
				name: "countryCode";
				type: { kind: "ENUM"; name: "Iso3166Alpha2CountryCode"; ofType: null };
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			createdOrganizations: {
				name: "createdOrganizations";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Organization"; ofType: null };
					};
				};
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			educationGrade: {
				name: "educationGrade";
				type: { kind: "ENUM"; name: "UserEducationGrade"; ofType: null };
			};
			emailAddress: {
				name: "emailAddress";
				type: { kind: "SCALAR"; name: "EmailAddress"; ofType: null };
			};
			employmentStatus: {
				name: "employmentStatus";
				type: { kind: "ENUM"; name: "UserEmploymentStatus"; ofType: null };
			};
			homePhoneNumber: {
				name: "homePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			isEmailAddressVerified: {
				name: "isEmailAddressVerified";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			maritalStatus: {
				name: "maritalStatus";
				type: { kind: "ENUM"; name: "UserMaritalStatus"; ofType: null };
			};
			mobilePhoneNumber: {
				name: "mobilePhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			natalSex: {
				name: "natalSex";
				type: { kind: "ENUM"; name: "UserNatalSex"; ofType: null };
			};
			naturalLanguageCode: {
				name: "naturalLanguageCode";
				type: { kind: "ENUM"; name: "Iso639Set1LanguageCode"; ofType: null };
			};
			organizationsWhereMember: {
				name: "organizationsWhereMember";
				type: {
					kind: "OBJECT";
					name: "UserOrganizationsWhereMemberConnection";
					ofType: null;
				};
			};
			postalCode: {
				name: "postalCode";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			role: {
				name: "role";
				type: { kind: "ENUM"; name: "UserRole"; ofType: null };
			};
			state: {
				name: "state";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			workPhoneNumber: {
				name: "workPhoneNumber";
				type: { kind: "SCALAR"; name: "PhoneNumber"; ofType: null };
			};
		};
	};
	UserEducationGrade: {
		name: "UserEducationGrade";
		enumValues:
			| "grade_1"
			| "grade_2"
			| "grade_3"
			| "grade_4"
			| "grade_5"
			| "grade_6"
			| "grade_7"
			| "grade_8"
			| "grade_9"
			| "grade_10"
			| "grade_11"
			| "grade_12"
			| "graduate"
			| "kg"
			| "no_grade"
			| "pre_kg";
	};
	UserEmploymentStatus: {
		name: "UserEmploymentStatus";
		enumValues: "full_time" | "part_time" | "unemployed";
	};
	UserMaritalStatus: {
		name: "UserMaritalStatus";
		enumValues:
			| "divorced"
			| "engaged"
			| "married"
			| "seperated"
			| "single"
			| "widowed";
	};
	UserNatalSex: {
		name: "UserNatalSex";
		enumValues: "female" | "intersex" | "male";
	};
	UserOrganizationsWhereMemberConnection: {
		kind: "OBJECT";
		name: "UserOrganizationsWhereMemberConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "UserOrganizationsWhereMemberConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	UserOrganizationsWhereMemberConnectionEdge: {
		kind: "OBJECT";
		name: "UserOrganizationsWhereMemberConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
		};
	};
	UserRole: { name: "UserRole"; enumValues: "administrator" | "regular" };
	Venue: {
		kind: "OBJECT";
		name: "Venue";
		fields: {
			attachments: {
				name: "attachments";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "VenueAttachment"; ofType: null };
					};
				};
			};
			createdAt: {
				name: "createdAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			creator: {
				name: "creator";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			events: {
				name: "events";
				type: { kind: "OBJECT"; name: "VenueEventsConnection"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			organization: {
				name: "organization";
				type: { kind: "OBJECT"; name: "Organization"; ofType: null };
			};
			updatedAt: {
				name: "updatedAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			updater: {
				name: "updater";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
		};
	};
	VenueAttachment: {
		kind: "OBJECT";
		name: "VenueAttachment";
		fields: {
			mimeType: {
				name: "mimeType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			url: {
				name: "url";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	VenueEventsConnection: {
		kind: "OBJECT";
		name: "VenueEventsConnection";
		fields: {
			edges: {
				name: "edges";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "OBJECT";
						name: "VenueEventsConnectionEdge";
						ofType: null;
					};
				};
			};
			pageInfo: {
				name: "pageInfo";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "PageInfo"; ofType: null };
				};
			};
		};
	};
	VenueEventsConnectionEdge: {
		kind: "OBJECT";
		name: "VenueEventsConnectionEdge";
		fields: {
			cursor: {
				name: "cursor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			node: {
				name: "node";
				type: { kind: "OBJECT"; name: "Event"; ofType: null };
			};
		};
	};
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
	name: never;
	query: "Query";
	mutation: "Mutation";
	subscription: "Subscription";
	types: introspection_types;
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
	interface setupSchema {
		introspection: introspection;
	}
}
