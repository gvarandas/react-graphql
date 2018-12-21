import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './navigator';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>
);

export default App;
