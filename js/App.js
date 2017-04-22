import React, { Component } from 'react';
import { View } from 'react-native';
import Input from './containers/Input';
import ResultList from './components/ResultList';

class App extends Component {
  render() {
    return (
      <View>
        <Input/>
        <ResultList/>
      </View>
    );
  }
}

export default App;
