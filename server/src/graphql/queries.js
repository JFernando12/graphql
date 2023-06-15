const Client = require('../models/Client');
const Project = require('../models/Project');
const { GraphQLID, GraphQLList } = require('graphql');
const { ClientType, ProjectType } = require('./types');

const client = {
  type: ClientType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent, args) {
    return Client.findById(args.id);
  },
};

const clients = {
  type: new GraphQLList(ClientType),
  resolve(parent, args) {
    return Client.find({});
  },
};

const project = {
  type: ProjectType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent, args) {
    return Project.findById(args.id);
  },
};

const projects = {
  type: new GraphQLList(ProjectType),
  resolve(parent, args) {
    return Project.find({});
  },
};

module.exports = {
  client,
  clients,
  project,
  projects,
};
