'use strict';

const { ApolloServer, AuthenticationError } = require('apollo-server-lambda');
const { applyMiddleware } = require('graphql-middleware');
const { makeExecutableSchema } = require('graphql-tools');
const { rule, shield } = require('graphql-shield');
const depthLimit = require('graphql-depth-limit');
const { typeDefs } = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');
const familyAPI = require('../dataSources/family/familyAPI');
const auth0API = require('../dataSources/family/auth0');
const validater = require('../middleware/jwtValidator');

const isAuthenticated = rule()(async (parent, args, context, info) => {
  const token = context.headers.Authorization;
  try {
    return await validater.validateJwt(token);
  } catch (err) {
    return new AuthenticationError('Not authorised');
  }
});

const permissions = shield(
  {
    Query: {
      getFamilyById: isAuthenticated,
      getMemberById: isAuthenticated,
      listAllMembersForFamily: isAuthenticated,
      listAllFamiliesForMember: isAuthenticated,
    },
    Mutation: {
      createFamily: isAuthenticated,
      updateFamily: isAuthenticated,
      deleteFamily: isAuthenticated,
      createMember: isAuthenticated,
      updateMemberForFamily: isAuthenticated,
      updateMemberGlobally: isAuthenticated,
      deleteMemberFromFamily: isAuthenticated,
      deleteMember: isAuthenticated,
    },
  },
  {
    allowExternalErrors: true
  }
);

let contextMethod = ({ event, context }) => ({
  headers: event.headers,
  functionName: context.functionName,
  event,
  context,
});

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  permissions
);

let apolloSettings = {
  schema,
  dataSources: () => {
    return {
      familyAPI: new familyAPI(),
      // auth0API: new auth0API()
    };
  },
  validationRules: [depthLimit(6)],
  context: contextMethod,
  cors: {
    origin: '*',
    credentials: true,
    methods: 'GET,POST',
  },
};

const server = new ApolloServer(apolloSettings);

module.exports.graphql = server.createHandler();
