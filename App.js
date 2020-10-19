/*
Programming with Mash
https://www.youtube.com/channel/UCkqNCi8euqXHHMk3XQ4luKw
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>
          Home
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2193b0',
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default App;
