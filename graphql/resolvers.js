
class Family {
    constructor(FamilyId, {FamilyName, FamilyStatus, FamilyDescription}) {
        this.FamilyId = FamilyId;
        this.FamilyName = FamilyName;
        this.FamilyStatus = FamilyStatus;
        this.FamilyDescription = FamilyDescription
    }
}

module.exports = {
    Query: {
        getFamilyByFamilyId: async (_, { FamilyId }) => {
            let family = {
                "FamilyName": "Cavanaugh Family",
                "FamilyStatus": "Active",
                "FamilyDescription": "This is a fake description"
            };

            return new Family(FamilyId, family);
        }
    },
    Mutation: {
        createFamily: async (_, { input }) => {
            let id = "1111";
            return new Family(id, input);
        }
    }
};