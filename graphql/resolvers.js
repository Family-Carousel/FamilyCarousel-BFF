module.exports = {
  Query: {
    getFamilyByFamilyId: async (_, { Id }, { dataSources }) => {
      return await dataSources.familyAPI.getFamily(Id);
    },
    listFamiliesbyMemberId: async (_, { Id }, { dataSources }) => {
      return await dataSources.familyAPI.getAllFamiliesForMemberId(Id);
    }
  },
  FamilyTemplate: {
    Members: async (_, { input }, { dataSources }) => {
      let members = [];
      for (let m; m >= _.length; m++) {
        let member = await dataSources.familyAPI.getMember(_[m].Id);
        members.push(member);
      }
      return members;
    },
    FamilyCreater: async (_, { input }, { dataSources }) => {
      let member = await dataSources.familyAPI.getMember(_.Id);
      return member;
    }
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
    updateMemberForFamily: async (_, { Id, FamilyId, input }, { dataSources }) => {
      return await dataSources.familyAPI.updateMemberForFamily(Id, FamilyId, input);
    },
    updateMemberGlobally: async (_, { Id, input }, { dataSources }) => {
      return await dataSources.familyAPI.updateMemberGlobally(Id, input);
    },
    deleteMemberFromFamily: async (_, { Id, FamilyId }, { dataSources }) => {
      return await dataSources.familyAPI.deleteMemberFromFamily(Id, FamilyId);
    },
    deleteMember: async (_, { Id }, { dataSources }) => {
      return await dataSources.familyAPI.deleteMember(Id);
    }
  }
};
