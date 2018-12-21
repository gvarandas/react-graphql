import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';

import AddBookContainer from '../containers/AddBookContainer';

import Input from './Input';
import Button from './Button';

export default class BookAdd extends React.Component {
  state = {
    title: '',
    author: '',
  };

  onChangeTitle = title => {
    this.setState({ title });
  };

  onChangeAuthor = author => {
    this.setState({ author });
  };

  onAddBook = addBookHandler => {
    addBookHandler({
      variables: {
        title: this.state.title,
        author: this.state.author,
      },
    });
    this.setState({
      title: '',
      author: '',
    });
    Keyboard.dismiss();
    this.props.navigation.goBack();
  };

  render() {
    return (
      <AddBookContainer>
        {addBook => (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Input
                placeholder="book title"
                value={this.state.title}
                onChangeText={this.onChangeTitle}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="book author"
                value={this.state.author}
                onChangeText={this.onChangeAuthor}
              />
            </View>
            <Button title="SAVE" onPress={() => this.onAddBook(addBook)} />
          </View>
        )}
      </AddBookContainer>
    );
  }
}

BookAdd.navigationOptions = {
  title: 'Add Book',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
