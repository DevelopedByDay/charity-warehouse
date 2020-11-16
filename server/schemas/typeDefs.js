

// import the gql tagged template function
const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Charity {
        _id: ID
        name: String
        category: String
        location: String
        url: String
        mission: String
    }

    type User {
        _id: ID
        username: String
        email: String
        savedCharities: [Charity]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        charities(name: String): [Charity]
        savedCharities(username: String): [Charity]
        user(username: String): User
    }

    type Mutation {
        login(email: String!, password: String!,): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addCharity(charityId: ID!): User
    }
`;

module.exports = typeDefs;