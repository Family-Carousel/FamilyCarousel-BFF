const { gql } = require('apollo-server-lambda');

const typeDefs = gql`

    "Family Template"
    type FamilyTemplate {
        Id: ID!
        MemberId: String
        Name: String
        Description: String
        IsActive: String
        CreatedBy: String
        CreatedDateTime: String
        LastUpdateBy: String
        LastUpdateDateTime: String
    }

    type Query {
        getFamilyByFamilyId(
            "Custom String"
            FamilyId: String!): [FamilyTemplate]  
    }

    input FamilyInput{
        FamilyId: String
        FamilyName: String
        FamilyDescription: String
    }

    type Mutation {
        createFamily(input: FamilyInput): FamilyTemplate
    }
`;

module.exports = {
    typeDefs: typeDefs
};