import React from 'react';
import { gql, graphql } from 'react-apollo';
import UsersList from "./UsersList";

export default graphql(gql`
  query {
    users {
      id,
      email,
      name,
    }
  }
`)(({ data: { loading, error, users }}) => {
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return <UsersList users={users} />
});
