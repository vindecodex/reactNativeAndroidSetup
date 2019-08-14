/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';

class App extends Component {
  state = {
    username: "",
    password: "",
  };

  usernameChangeHandler = val => {
    this.setState({
      username: val
    });
  }
  passwordChangeHandler = val => {
    this.setState({
      password: val
    });
  }
  loginPressHandler = () => {
    alert('username: ' + this.state.username + '\n' + 'password: ' + this.state.password)
  }
  render() {
    return(
    <View style={ styles.container }>
      <Image
        source={{ uri: 'https://logo.clearbit.com/reactiongaming.us' }}
        style={ styles.loginImage }
      />
      <Text style={ styles.loginText }>VINDECODEX</Text>
      <TextInput
        style={ styles.loginInput }
        value = {this.state.username}
        onChangeText = {this.usernameChangeHandler}
        placeholder="Username"
      />
        <TextInput
          style={ styles.loginInput }
          secureTextEntry={true}
          onChangeText = {this.passwordChangeHandler}
          placeholder="Password"
        />
          <Button
            title="Login"
            type="outline"
            onPress={ this.loginPressHandler }
        />
    </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 40,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  loginInput: {
    width: 300,
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    padding: 10,
  },
  loginImage: {
    width: 150,
    height: 150,
  }
  });

export default App;
