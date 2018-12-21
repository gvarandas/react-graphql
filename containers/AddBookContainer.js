import React from 'react';
import { Mutation } from 'react-apollo';

import { GET_BOOKS, ADD_BOOK } from '../queries';

const AddBookContainer = ({ children }) => (
  <Mutation
    mutation={ADD_BOOK}
    update={(cache, { data: { addBook } }) => {
      const { books } = cache.readQuery({ query: GET_BOOKS });
      cache.writeQuery({
        query: GET_BOOKS,
        data: { books: { addBook, ...books } },
      });
    }}
  >
    {addBook => children(addBook)}
  </Mutation>
);

export default AddBookContainer;
