import { gql } from 'react-apollo';

export default gql`
  query {
    currentUser {
      id,
      email,
      name,
    }
  }
`;
