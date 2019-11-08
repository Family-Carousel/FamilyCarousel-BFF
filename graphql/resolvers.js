module.exports = {
    Query: {
        getFamilyByFamilyId: async (_, { id }, { dataSources }) => {
            return await dataSources.familyAPI.getFamily(id);
        },
        listFamiliesbyMemberId: async (_, { memberId }, { dataSources }) => {
            return await dataSources.familyAPI.getAllFamiliesForMemberId(memberId);
        }         
    },
    Mutation: {
        createFamily: async (_, { input }) => {
            return await dataSources.familyAPI.createFamily(input);
        },
        updateFamily: async (_, { input }, { dataSources }) => {
            return await dataSources.familyAPI.updateFamily(input);
        },
        deleteFamily: async (_, { id }, { dataSources }) => {
            return await dataSources.familyAPI.deleteFamily(id);
        }
    }
};
