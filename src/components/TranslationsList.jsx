import React from 'react';
import { gql, graphql } from 'react-apollo';

const query = gql`
  query {
    translations {
      translationUuid,
      contentUuid,
      language,
      content,
    }
  }
 `;

const TranslationsList = ({ data: { loading, error, translations }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <ul>
      {translations.map(t => (
        <li key={t.translationUuid}>
          {t.language}: {t.content}
        </li>
      ))}
    </ul>
  );
};

export default graphql(query)(TranslationsList);
