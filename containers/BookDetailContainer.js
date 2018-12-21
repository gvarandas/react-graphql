import React from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';

import { GET_BOOK_DETAIL } from '../queries';

const BooksContainer = ({ children, id }) => (
  <Query query={GET_BOOK_DETAIL} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      return children(data.book);
    }}
  </Query>
);

export default BooksContainer;
