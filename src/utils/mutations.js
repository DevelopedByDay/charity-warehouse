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

export const SAVE_CHARITY = gql`
  mutation saveCharity($charityData: CharityInput!) {
    saveCharity(charityData: $charityData) {
        _id
        username
        email
        savedCharities {
          charityId
          charityName
          description
          link
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
          charityId
          charityName
          description
          link
        }
    }
  }
`;
