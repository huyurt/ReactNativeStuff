import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentDidUpdate() {
    const config = {
      apiKey: ".",
      authDomain: ".",
      databaseURL: "firebase.com",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "::"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
        <Provider store={createStore(reducers)}>
          <View>
            <Text>
              Hello
            </Text>
          </View>
        </Provider>
    );
  }
}

export default App;
