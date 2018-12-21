import React from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';

import BooksContainer from '../containers/BooksContainer';

import BookRow from './BookRow';

const BookList = ({ navigation }) => (
  <BooksContainer>
    {books => (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.list}>
          {books.map(({ id, author, title }) => (
            <BookRow key={id} author={author} title={title} />
          ))}
        </ScrollView>
        <View>
          <Button
            title="Add Book"
            onPress={() => navigation.navigate('BookAdd')}
          />
        </View>
      </View>
    )}
  </BooksContainer>
);

BookList.navigationOptions = {
  title: 'Book List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default BookList;
