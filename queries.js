import gql from 'graphql-tag';

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $cover: String) {
    addBook(title: $title, author: $author, cover: $cover) {
      id
      title
      author
      cover
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

export const GET_BOOK_DETAIL = gql`
  query getBook($id: String!) {
    book(id: $id) {
      id
      title
      author
      cover
    }
  }
`;
