import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
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

export const QUERY_CHARITIES = gql`
  query charities($name: String) {
    charities(name: $name) {
      _id
      name
      mission
      url
      location
      category
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedCharities {
        _id
        name
        mission
        location
        url
        category
      }
    }
  }
`;

