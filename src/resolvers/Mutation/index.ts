import type { MutationResolvers } from "../../types/generatedGraphQLTypes";
import { acceptMembershipRequest } from "./acceptMembershipRequest";
import { addEventAttendee } from "./addEventAttendee";
import { addFeedback } from "./addFeedback";
import { addLanguageTranslation } from "./addLanguageTranslation";
import { addOrganizationCustomField } from "./addOrganizationCustomField";
import { addOrganizationImage } from "./addOrganizationImage";
import { addUserCustomData } from "./addUserCustomData";
import { addUserImage } from "./addUserImage";
import { addUserToUserFamily } from "./addUserToUserFamily";
import { addPeopleToUserTag } from "./addPeopleToUserTag";
import { assignUserTag } from "./assignUserTag";
import { assignToUserTags } from "./assignToUserTags";
import { blockUser } from "./blockUser";
import { cancelMembershipRequest } from "./cancelMembershipRequest";
import { checkIn } from "./checkIn";
import { checkOut } from "./checkOut";
import { createActionItem } from "./createActionItem";
import { createActionItemCategory } from "./createActionItemCategory";
import { createAdmin } from "./createAdmin";
import { createAdvertisement } from "./createAdvertisement";
import { createAgendaCategory } from "./createAgendaCategory";
import { createAgendaItem } from "./createAgendaItem";
import { createAgendaSection } from "./createAgendaSection";
import { createComment } from "./createComment";
import { createChat } from "./createChat";
import { createDonation } from "./createDonation";
import { createEvent } from "./createEvent";
import { createEventVolunteer } from "./createEventVolunteer";
import { createFund } from "./createFund";
import { createFundraisingCampaign } from "./createFundraisingCampaign";
import { createEventVolunteerGroup } from "./createEventVolunteerGroup";
import { createFundraisingCampaignPledge } from "./createFundraisingCampaignPledge";
import { createMember } from "./createMember";
import { createOrganization } from "./createOrganization";
import { createPost } from "./createPost";
import { createSampleOrganization } from "./createSampleOrganization";
import { createUserFamily } from "./createUserFamily";
import { createUserTag } from "./createUserTag";
import { createVenue } from "./createVenue";
import { createVolunteerMembership } from "./createVolunteerMembership";
import { deleteAdvertisement } from "./deleteAdvertisement";
import { deleteAgendaCategory } from "./deleteAgendaCategory";
import { deleteDonationById } from "./deleteDonationById";
import { deleteVenue } from "./deleteVenue";
import { editVenue } from "./editVenue";
import { forgotPassword } from "./forgotPassword";
import { joinPublicOrganization } from "./joinPublicOrganization";
import { leaveOrganization } from "./leaveOrganization";
import { likeComment } from "./likeComment";
import { likePost } from "./likePost";
import { login } from "./login";
import { logout } from "./logout";
import { otp } from "./otp";
import { recaptcha } from "./recaptcha";
import { refreshToken } from "./refreshToken";
import { registerEventAttendee } from "./registerEventAttendee";
import { registerForEvent } from "./registerForEvent";
import { rejectMembershipRequest } from "./rejectMembershipRequest";
import { removeActionItem } from "./removeActionItem";
import { removeAdmin } from "./removeAdmin";
import { removeAgendaItem } from "./removeAgendaItem";
import removeAgendaSection from "./removeAgendaSection";
import { removeComment } from "./removeComment";
import { removeEvent } from "./removeEvent";
import { removeEventAttendee } from "./removeEventAttendee";
import { removeEventVolunteer } from "./removeEventVolunteer";
import { removeEventVolunteerGroup } from "./removeEventVolunteerGroup";
import { removeFundraisingCampaignPledge } from "./removeFundraisingCampaingPledge";
import { removeMember } from "./removeMember";
import { removeOrganization } from "./removeOrganization";
import { removeOrganizationCustomField } from "./removeOrganizationCustomField";
import { removeOrganizationImage } from "./removeOrganizationImage";
import { removePost } from "./removePost";
import { removeSampleOrganization } from "./removeSampleOrganization";
import { removeUserCustomData } from "./removeUserCustomData";
import { removeUserFamily } from "./removeUserFamily";
import { removeUserFromUserFamily } from "./removeUserFromUserFamily";
import { removeUserImage } from "./removeUserImage";
import { removeUserTag } from "./removeUserTag";
import { removeFromUserTags } from "./removeFromUserTags";
import { resetCommunity } from "./resetCommunity";
import { revokeRefreshTokenForUser } from "./revokeRefreshTokenForUser";
import { saveFcmToken } from "./saveFcmToken";
import { sendMembershipRequest } from "./sendMembershipRequest";
import { sendMessageToChat } from "./sendMessageToChat";
import { markChatMessagesAsRead } from "./markChatMessagesAsRead";
import { signUp } from "./signUp";
import { togglePostPin } from "./togglePostPin";
import { unassignUserTag } from "./unassignUserTag";
import { unblockUser } from "./unblockUser";
import { unlikeComment } from "./unlikeComment";
import { unlikePost } from "./unlikePost";
import { unregisterForEventByUser } from "./unregisterForEventByUser";
import { updateActionItem } from "./updateActionItem";
import { updateActionItemCategory } from "./updateActionItemCategory";
import { updateAdvertisement } from "./updateAdvertisement";
import { updateAgendaCategory } from "./updateAgendaCategory";
import { updateAgendaItem } from "./updateAgendaItem";
import { updateAgendaSection } from "./updateAgendaSection";
import { updateCommunity } from "./updateCommunity";
import { updateEvent } from "./updateEvent";
import { updateEventVolunteer } from "./updateEventVolunteer";
import { updateFund } from "./updateFund";
import { updateEventVolunteerGroup } from "./updateEventVolunteerGroup";
import { updateFundraisingCampaignPledge } from "./updateFundCampaignPledge";
import { updateFundraisingCampaign } from "./updateFundraisingCampaign";
import { updateLanguage } from "./updateLanguage";
import { updateOrganization } from "./updateOrganization";
import { updateSessionTimeout } from "./updateSessionTimeout";
import { updateUserPassword } from "./updateUserPassword";
import { updateUserProfile } from "./updateUserProfile";
import { updateUserRoleInOrganization } from "./updateUserRoleInOrganization";
import { updateUserTag } from "./updateUserTag";
import { updateVolunteerMembership } from "./updateVolunteerMembership";
import { createNote } from "./createNote";
import { deleteNote } from "./deleteNote";
import { updateNote } from "./updateNote";
import { addUserToGroupChat } from "./addUserToGroupChat";
import { updateChat } from "./updateChat";
import { updateChatMessage } from "./updateChatMessage";

export const Mutation: MutationResolvers = {
  acceptMembershipRequest,
  addEventAttendee,
  addFeedback,
  addLanguageTranslation,
  addOrganizationCustomField,
  addOrganizationImage,
  addUserCustomData,
  addUserImage,
  addUserToUserFamily,
  addPeopleToUserTag,
  assignUserTag,
  assignToUserTags,
  removeUserFamily,
  removeUserFromUserFamily,
  createUserFamily,
  blockUser,
  cancelMembershipRequest,
  updateUserRoleInOrganization,
  checkIn,
  checkOut,
  createMember,
  createAdmin,
  createActionItem,
  createComment,
  createAdvertisement,
  createAgendaCategory,
  createAgendaItem,
  createAgendaSection,
  createChat,
  createDonation,
  createEvent,
  createFund,
  createFundraisingCampaign,
  createOrganization,
  createNote,
  createPost,
  createSampleOrganization,
  createActionItemCategory,
  createUserTag,
  createVenue,
  createVolunteerMembership,
  deleteDonationById,
  deleteAdvertisement,
  deleteVenue,
  deleteNote,
  editVenue,
  deleteAgendaCategory,
  forgotPassword,
  joinPublicOrganization,
  createEventVolunteer,
  createEventVolunteerGroup,
  leaveOrganization,
  likeComment,
  likePost,
  login,
  logout,
  otp,
  recaptcha,
  refreshToken,
  registerForEvent,
  registerEventAttendee,
  rejectMembershipRequest,
  removeAdmin,
  removeActionItem,
  removeAgendaItem,
  removeAgendaSection,
  removeComment,
  removeEvent,
  removeEventAttendee,
  removeEventVolunteer,
  removeEventVolunteerGroup,
  removeMember,
  removeOrganization,
  removeOrganizationCustomField,
  removeOrganizationImage,
  removeSampleOrganization,
  removePost,
  removeUserCustomData,
  removeUserImage,
  removeUserTag,
  removeFromUserTags,
  resetCommunity,
  revokeRefreshTokenForUser,
  saveFcmToken,
  sendMembershipRequest,
  sendMessageToChat,
  signUp,
  togglePostPin,
  unassignUserTag,
  unblockUser,
  unlikeComment,
  unlikePost,
  unregisterForEventByUser,
  updateActionItem,
  updateActionItemCategory,
  updateAgendaCategory,
  updateAgendaItem,
  updateAgendaSection,
  updateNote,
  updateCommunity,
  updateEvent,
  updateEventVolunteer,
  updateFund,
  updateEventVolunteerGroup,
  updateLanguage,
  updateOrganization,
  updateSessionTimeout,
  updateUserProfile,
  updateUserPassword,
  updateUserTag,
  updateVolunteerMembership,
  updateAdvertisement,
  updateFundraisingCampaign,
  updateFundraisingCampaignPledge,
  createFundraisingCampaignPledge,
  removeFundraisingCampaignPledge,
  markChatMessagesAsRead,
  addUserToGroupChat,
  updateChat,
  updateChatMessage,
};
