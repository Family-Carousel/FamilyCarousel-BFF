const { gql } = require('apollo-server-lambda');

const typeDefs = gql`

    "Family Member"
    type Member {
        Id: ID!
        FirstName: String!
        LastName: String
        DateOfBirth: String
        ManagedUser: Boolean
        EmailAddress: String!
        Age: Int!
        CreatedBy: String
        CreatedDateTime: String
        LastUpdateBy: String
        LastUpdateDateTime: String
    }

    "Family Template"
    type Family {
        Id: ID!
        Name: String!
        Description: String
        Size: String
        FamilyCreater: Member!
        Members: [Member]
        IsActive: String
        CreatedBy: String
        CreatedDateTime: String
        LastUpdateBy: String
        LastUpdateDateTime: String
    }

    type Query {
        getFamilyByFamilyId("Custom String" FamilyId: ID!): Family  
        listFamiliesbyMemberId("Custom String" MemberId: ID!): [Family]
    }

    input FamilyInput{
        FamilyCreater: ID!
        Name: String!
        Description: String
        Size: String
    }

    input MemberInput{
        FirstName: String!
        LastName: String
        DateOfBirth: String
        Size: String
        EmailAddress: String!
        Age: Int!
    }

    type Mutation {
        createFamily(input: FamilyInput!): Family
        updateFamily(Id: ID!, input: FamilyInput!): Family
        deleteFamily(Id: ID!): Family
        createMember(input: MemberInput!): Member
        updateMember(Id: ID!, input: MemberInput!): Member
        deleteMember(Id: ID!): Member
    }
`;

module.exports = {
    typeDefs: typeDefs
};