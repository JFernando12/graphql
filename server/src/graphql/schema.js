const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;
const { client, clients, project, projects } = require('./queries');
const {
  addClient,
  deleteClient,
  addProject,
  deleteProject,
  updateProject,
} = require('./mutations');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    client,
    clients,
    project,
    projects,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addClient,
    deleteClient,
    addProject,
    deleteProject,
    updateProject,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
