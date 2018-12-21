import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookCard = ({ book }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.title}>{book.title}</Text>
    <Text style={styles.author}>by {book.author}</Text>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    margin: 15,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 20,
  },
  author: {
    marginTop: 5,
    fontStyle: 'italic',
  },
});

export default BookCard;
