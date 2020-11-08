const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    charityCount: Int
    savedCharities: [Charity]
  }

  type Charity {
    charityId: ID!
    mission: String
    url: String
    location: String!
    category: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCharity(charityData: CharityInput!): User
    removeCharity(charityId: ID!): User
  }
`;

module.exports = typeDefs;
