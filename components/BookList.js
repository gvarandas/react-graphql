import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import BooksContainer from '../containers/BooksContainer';

import BookRow from './BookRow';
import Button from './Button';

const BookList = ({ navigation }) => (
  <BooksContainer>
    {books => (
      <View style={styles.container}>
        <FlatList
          data={books}
          renderItem={({ item: { id, author, title } }) => (
            <BookRow key={id} author={author} title={title} />
          )}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id}
        />
        <Button
          title="ADD BOOK"
          onPress={() => navigation.navigate('BookAdd')}
        />
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
    alignItems: 'stretch',
  },
});

export default BookList;
