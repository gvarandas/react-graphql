import React from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

import AddBookContainer from '../containers/AddBookContainer';

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

  render() {
    return (
      <AddBookContainer>
        {addBook => (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Title"
                style={styles.input}
                value={this.state.title}
                onChangeText={this.onChangeTitle}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Author"
                style={styles.input}
                value={this.state.author}
                onChangeText={this.onChangeAuthor}
              />
            </View>
            <Button
              title="Add Book"
              onPress={() => {
                addBook({
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
              }}
            />
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
    padding: 10,
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    fontSize: 16,
  },
});
