import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARITY = gql`
  mutation addCharity($id: ID!) {
    addCharity(charityId: $id) {
        _id
        username
        email
        savedCharities {
            id
            name
            mission
            url
            location
            category
        }
    }
  }
`;

export const REMOVE_CHARITY = gql`
  mutation removeCharity($charityId: ID!) {
    removeCharity(charityId: $charityId) {
        _id
        username
        email
        savedCharities {
            id
            name
            mission
            url
        }
    }
  }
`;
