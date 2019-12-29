const { gql } = require('apollo-server-lambda');

const typeDefs = gql`

    "Invite Data"
    type Invite {
        SentById: ID
        Accepted: Boolean
        AcceptedDate: String
        SentToEmail: String
        SentToId: ID
    }

    "Member Profile"
    type Profile {
        FavoriteFood: ID
        FavoriteColor: String
        CelabrateBirthday: Boolean
        Minor: Boolean
    }

    "Family Member"
    type Member {
        Id: ID
        FirstName: String
        LastName: String
        DateOfBirth: String
        ManagedUser: Boolean
        InvitedBy: ID
        EmailAddress: String
        Age: Int
        Invite: Invite
        Profile: Profile
    }

    "Family Template"
    type FamilyTemplate {
        Id: ID!
        CreatedByMemberId: ID!
        Name: String
        Description: String
        Size: String
        Members: [Member]
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
        CreatedByMemberId: ID!
        Name: String!
        Description: String
    }

    type Mutation {
        createFamily(input: FamilyInput!): FamilyTemplate
        updateFamily(FamilyId: ID!, input: FamilyInput!): FamilyTemplate
        deleteFamily(FamilyId: ID!): FamilyTemplate
    }
`;

module.exports = {
    typeDefs: typeDefs
};