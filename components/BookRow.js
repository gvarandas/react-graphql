import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookRow = ({ title, author }) => (
  <View style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>by {author}</Text>
  </View>
);

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 10,
    borderColor: '#666',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  author: {
    fontStyle: 'italic',
  },
});

export default BookRow;
