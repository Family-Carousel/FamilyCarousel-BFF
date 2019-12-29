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

    "Notification"
    type Notification {
        acknowledged: Boolean
        Message: String
        CreatedDateTime: String
        AcknowledgedDateTime: String
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
        Notifications: [Notification]
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
        Notifications: [Notification]
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

    "Input Invite Data"
    type InviteInput {
        SentById: ID!
        SentToEmail: String!
    }

    type Mutation {
        createFamily(input: FamilyInput!): FamilyTemplate
        updateFamily(FamilyId: ID!, input: FamilyInput!): FamilyTemplate
        deleteFamily(FamilyId: ID!): FamilyTemplate
        sendInvite(FamilyId: ID!, input: InviteInput): Invite
    }
`;

module.exports = {
    typeDefs: typeDefs
};