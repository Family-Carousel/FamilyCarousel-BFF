const { gql } = require('apollo-server-lambda');

const typeDefs = gql`

    "Family Template"
    type FamilyTemplate {
        FamilyId: ID!,
        FamilyName: String,
        FamilyDescription: String,
        FamilyStatus: String
    }

    type Query {
        getFamilyByFamilyId(
            "Custom String"
            FamilyId: String!): [FamilyTemplate]  
    }

    input FamilyInput{
        FamilyId: String,
        FamilyName: String,
        FamilyDescription: String
    }

    type Mutation {
        createFamily(input: FamilyInput): FamilyTemplate
    }
`;

module.exports = {
    typeDefs: typeDefs
};