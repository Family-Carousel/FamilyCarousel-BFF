const { gql } = require('apollo-server-lambda');

const typeDefs = gql`

  "Rule"
  type Rule {
    Id: ID!
    FamilyId: ID!
    Name: String!
    Details: String
    AppliesToUsers: [String]
    FamilyRule: Boolean!
    Color: String!
    CreateBy: String!
    CreateDateTime: String!
    LastUpdateBy: String!
    LastUpdateDateTime: String!
  }

  "Calendar Item"
  type CalendarItem {
    Id: ID!
    FamilyId: ID!
    Name: String!
    Details: String
    Start: String!
    End: String!
    Color: String!
    CreateBy: String!
    CreateDateTime: String!
    LastUpdateBy: String!
    LastUpdateDateTime: String!
  }

  "Family Member"
  type Member {
    Id: ID!
    FamilyId: ID!
    FirstName: String!
    LastName: String
    DateOfBirth: String!
    ManagedUser: Boolean!
    EmailAddress: String!
    Color: String!
    Age: Int!
    CreateBy: String!
    CreateDateTime: String!
    LastUpdateBy: String!
    LastUpdateDateTime: String!
  }

  "Family"
  type Family {
    Id: ID! 
    Name: String!
    FamilyOwner: String!
    Description: String
    Members: [Member]
    CalendarItems: [CalendarItem]
    Rules: [Rule]
    UsesRules: Boolean!
    Size: Int!
    Color: String!
    IsActive: String!
    CreateBy: String!
    CreateDateTime: String!
    LastUpdateBy: String!
    LastUpdateDateTime: String!
  }

  type Query {
    getFamilyById("Custom String" Id: ID!): Family
    getMemberById("Custom String" Id: ID!): Member
    listAllMembersForFamily("Custom String" FamilyId: ID!): [Member]
    listAllFamiliesForMember("Custom String" Id: ID!): [Family]
    listAllCalendarItemsForFamily("Custom String", FamilyId: ID!): [CalendarItem]
    listAllRulesForFamily("Custom String", FamilyId: ID!): [Rule]
  }

  input FamilyInput {
    Id: ID
    Name: String!
    UserId: String!
    FamilyOwner: ID!
    Description: String!
    Color: String!
    Size: Int!
    IsActive: Boolean
    UsesRules: Boolean!
  }

  input MemberInput {
    Id: ID!
    UserId: ID!
    FamilyId: ID!
    FirstName: String!
    LastName: String
    Color: String!
    DateOfBirth: String!
    ManagedUser: Boolean!
    EmailAddress: String!
  }

  input CalendarItemInput {
    Id: ID
    FamilyId: ID
    UserId: ID!
    Name: String!
    Details: String
    Start: String!
    End: String!
    Color: String!
  }

  input RuleInput {
    Id: ID
    FamilyId: ID
    UserId: ID!
    Name: String!
    Details: String
    FamilyRule: Boolean!
    AppliesToUsers: [String]
    Color: String!
  }

  type Mutation {
    createFamily(input: FamilyInput!): Family
    updateFamily(Id: ID!, input: FamilyInput!): Family
    deleteFamily(Id: ID!): String
    createMember(input: MemberInput!): Member
    updateMemberForFamily(Id: ID!, FamilyId: ID!, input: MemberInput!): Member
    updateMemberGlobally(Id: ID!, input: MemberInput!): Member
    deleteMemberFromFamily(Id: ID!, FamilyId: ID!): String
    deleteMember(Id: ID!): String
    createCalendarEvent(input: CalendarItemInput!): CalendarItem
    updateCalendarItemForFamily(Id: ID!, FamilyId: ID!, input: CalendarItemInput!): CalendarItem
    deleteCalendarItemForFamily(Id: ID!, FamilyId: ID!): String
    createRule(input: RuleInput!): Rule
    updateRuleForFamily(Id: ID!, FamilyId: ID!, input: RuleInput!): Rule
    deleteRuleForFamily(Id: ID!, FamilyId: ID!): String
  }
`;

module.exports = {
  typeDefs: typeDefs,
};
