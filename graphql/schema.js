const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  "Family Member"
  type Member {
    Id: ID!
    FamilyId: ID!
    FirstName: String!
    LastName: String
    DateOfBirth: String!
    ManagedUser: Boolean!
    EmailAddress: String!
    Age: Int!
    CreateBy: String
    CreateDateTime: String
    LastUpdateBy: String
    LastUpdateDateTime: String
  }

  "Family"
  type Family {
    Id: ID!
    Name: String!
    FamilyOwner: String!
    Description: String
    Members: [Member]
    Size: Int
    IsActive: String!
    CreateBy: String
    CreateDateTime: String
    LastUpdateBy: String
    LastUpdateDateTime: String
  }

  type Query {
    getFamilyById("Custom String" Id: ID!): Family
    getMemberById("Custom String" Id: ID!): Member
    listAllMembersForFamily("Custom String" FamilyId: ID!): [Member]
    listAllFamiliesForMember("Custom String" Id: ID!): [Family]
  }

  input FamilyInput {
    Name: String!
    UserId: String!
    FamilyOwner: ID!
    Description: String
    Size: Int!
  }

  input MemberInput {
    Id: ID!
    UserId: ID!
    FamilyId: ID!
    FirstName: String!
    LastName: String
    DateOfBirth: String!
    ManagedUser: Boolean!
    EmailAddress: String!
  }

  type Mutation {
    createFamily(input: FamilyInput!): Family
    updateFamily(Id: ID!, input: FamilyInput!): Family
    deleteFamily(Id: ID!): Family
    createMember(input: MemberInput!): Member
    updateMemberForFamily(Id: ID!, FamilyId: ID!, input: MemberInput!): Member
    updateMemberGlobally(Id: ID!, input: MemberInput!): Member
    deleteMemberFromFamily(Id: ID!, FamilyId: ID!): Member
    deleteMember(Id: ID!): Member
  }
`;

module.exports = {
  typeDefs: typeDefs,
};
