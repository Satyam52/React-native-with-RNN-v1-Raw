import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import startTabs from "../MainTab/startMainTabs";

class AuthScreen extends Component {
  loginhandler = () => {
    startTabs();
  };
  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginhandler} />
      </View>
    );
  }
}

export default AuthScreen;
