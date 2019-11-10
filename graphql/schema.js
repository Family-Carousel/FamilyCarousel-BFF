const { gql } = require('apollo-server-lambda');

const typeDefs = gql`

    "Family Template"
    type FamilyTemplate {
        FamilyId: ID!
        MemberId: ID!
        Name: String
        Description: String
        IsActive: String
        CreatedBy: String
        CreatedDateTime: String
        LastUpdateBy: String
        LastUpdateDateTime: String
    }

    type Query {
        getFamilyByFamilyId("Custom String" FamilyId: ID!): FamilyTemplate  
        listFamiliesbyMemberId("Custom String" MemberId: ID!): [FamilyTemplate]
    }

    input FamilyInput{
        FamilyId: ID
        FamilyName: String
        FamilyDescription: String
    }

    type Mutation {
        createFamily(input: FamilyInput!): FamilyTemplate
        updateFamily(FamilyId: ID!, input: FamilyInput): FamilyTemplate
        deleteFamily(FamilyId: ID!): FamilyTemplate
    }
`;

module.exports = {
    typeDefs: typeDefs
};