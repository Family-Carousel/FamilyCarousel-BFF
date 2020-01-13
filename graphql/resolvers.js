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
    updateFamily: async (_, { input }, { dataSources }) => {
      return await dataSources.familyAPI.updateFamily(input);
    },
    deleteFamily: async (_, { id }, { dataSources }) => {
      return await dataSources.familyAPI.deleteFamily(id);
    },
    createMember: async (_, { input }, { dataSources }) => {
      return await dataSources.familyAPI.createMember(input);
    },
    updateMember: async (_, { input }, { dataSources }) => {
      return await dataSources.familyAPI.updateMember(input);
    },
    deleteMember: async (_, { id }, { dataSources }) => {
      return await dataSources.familyAPI.deleteMember(id);
    }
  }
};
