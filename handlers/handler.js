'use strict';

const { ApolloServer } = require('apollo-server-lambda');
const depthLimit = require('graphql-depth-limit');
const { typeDefs } = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

let contextMethod = ({event, context}) => ({
  headers: event.headers,
  functionName: context.functionName,
  event,
  context
});

let apolloSettings = {
  typeDefs: typeDefs,
  resolvers: resolvers,
  validationRules: [depthLimit(6)],
  context: contextMethod
};

const server = new ApolloServer( apolloSettings );

module.exports.graphql = server.createHandler(
  {
    cors: {
      origin: '*',
      crednetials: true
    }
  }
);