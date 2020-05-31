module.exports = {
  Query: {
    getFamilyById: async (_, { Id }, { dataSources }) => {
      return await dataSources.familyAPI.getFamilyById(Id);
    },
    getMemberById: async (_, { Id }, { dataSources }) => {
      return await dataSources.familyAPI.getMemberById(Id);
    },
    
    listAllMembersForFamily: async (_, { FamilyId }, { dataSources }) => {
      return await dataSources.familyAPI.listAllMembersForFamily(FamilyId);
    },
    listAllFamiliesForMember: async (_, { Id }, { dataSources }) => {
      return await dataSources.familyAPI.listAllFamiliesForMember(Id);
    },
    listAllCalendarItemsForFamily: async (_, { FamilyId }, { dataSources }) => {
      return await dataSources.familyAPI.listAllCalendarItemsForFamily(
        FamilyId
      );
    },
  },
  Mutation: {
    createFamily: async (_, { input }, { dataSources }) => {
      return await dataSources.familyAPI.createFamily(input);
    },
    updateFamily: async (_, { Id, input }, { dataSources }) => {
      return await dataSources.familyAPI.updateFamily(Id, input);
    },
    deleteFamily: async (_, { Id }, { dataSources }) => {
      return await dataSources.familyAPI.deleteFamily(Id);
    },

    createMember: async (_, { input }, { dataSources }) => {
      return await dataSources.familyAPI.createMember(input);
    },
    updateMemberForFamily: async (
      _,
      { Id, FamilyId, input },
      { dataSources }
    ) => {
      return await dataSources.familyAPI.updateMemberForFamily(
        Id,
        FamilyId,
        input
      );
    },
    updateMemberGlobally: async (_, { Id, input }, { dataSources }) => {
      return await dataSources.familyAPI.updateMemberGlobally(Id, input);
    },
    deleteMemberFromFamily: async (_, { Id, FamilyId }, { dataSources }) => {
      return await dataSources.familyAPI.deleteMemberFromFamily(Id, FamilyId);
    },
    deleteMember: async (_, { Id }, { dataSources }) => {
      return await dataSources.familyAPI.deleteMember(Id);
    },

    createCalendarEvent: async (_, { input }, { dataSources }) => {
      return await dataSources.familyAPI.createCalendarItem(input);
    },
    updateCalendarItemForFamily: async (
      _,
      { Id, FamilyId, input },
      { dataSources }
    ) => {
      return await dataSources.familyAPI.updateCalendarItemForFamily(
        Id,
        FamilyId,
        input
      );
    },
    deleteCalendarItemForFamily: async (
      _,
      { Id, FamilyId },
      { dataSources }
    ) => {
      return await dataSources.familyAPI.deleteCalendarItemFromFamily(
        Id,
        FamilyId
      );
    },
  },
};
