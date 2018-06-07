import React, { Component } from 'react';
import { View } from 'react-native';
import Scenes from './scenes';
import codePush from 'react-native-code-push';

class App extends Component {
  render() {
    return (
       <View style={{ flex: 1 }}>
         <Scenes />
       </View>
    );
  }
}
App = codePush(App);
export default App;
