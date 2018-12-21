import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import BooksContainer from '../containers/BooksContainer';

import BookAdd from './BookAdd';
import BookRow from './BookRow';

const BookList = () => (
  <BooksContainer>
    {books => (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BOOK LIST</Text>
        </View>
        <ScrollView contentContainerStyle={styles.list}>
          {books.map(({ id, author, title }) => (
            <BookRow key={id} author={author} title={title} />
          ))}
        </ScrollView>
        <BookAdd />
      </KeyboardAvoidingView>
    )}
  </BooksContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default BookList;
