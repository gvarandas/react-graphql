import gql from 'graphql-tag';

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

export const GET_BOOKS = gql`
  {
    books {
      id
      author
      title
    }
  }
`;
