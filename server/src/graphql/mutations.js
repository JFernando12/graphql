const { GraphQLString } = require('graphql');
const { ClientType } = require('./types');
const Client = require('../models/Client');
const { ProjectType } = require('./types');
const Project = require('../models/Project');

// Client Mutation

const addClient = {
  type: ClientType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  },
  resolve(parent, args) {
    const client = new Client({
      name: args.name,
      email: args.email,
      phone: args.phone,
    });
    return client.save();
  },
};

const deleteClient = {
  type: ClientType,
  args: {
    id: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Client.findByIdAndDelete(args.id);
  },
};

// Project Mutation

const addProject = {
  type: ProjectType,
  args: {
    name: { type: GraphQLString },
    clientId: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  },
  resolve(parent, args) {
    const project = new Project({
      name: args.name,
      clientId: args.clientId,
      description: args.description,
      status: args.status,
    });
    return project.save();
  },
};

const deleteProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Project.findByIdAndDelete(args.id);
  },
};

const updateProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    clientId: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Project.findByIdAndUpdate(
      args.id,
      {
        name: args.name,
        clientId: args.clientId,
        description: args.description,
        status: args.status,
      },
      { new: true }
    );
  },
};

module.exports = {
  addClient,
  deleteClient,
  addProject,
  deleteProject,
  updateProject,
};
