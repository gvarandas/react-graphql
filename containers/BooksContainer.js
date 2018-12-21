import React from 'react';
import { Text } from 'react-native';
import { Query } from 'react-apollo';

import { GET_BOOKS } from '../queries';

const BooksContainer = ({ children }) => (
  <Query query={GET_BOOKS}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      return children(data.books);
    }}
  </Query>
);

export default BooksContainer;
