import React from 'react';
import { gql, graphql } from 'react-apollo';

export default graphql(gql`
  query {
    translations {
      id,
      language,
      content,
    }
  }
`)(({ data: { loading, error, translations }}) => {
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul>
      {translations.map(t => (
        <li key={t.id}>
          {t.language}: {t.content}
        </li>
      ))}
    </ul>
  );
});
