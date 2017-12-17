import React, { Component } from 'react';
import { View } from 'react-native';
//import Input from './containers/Input';
//import ResultList from './containers/ResultList';
import Scenes from './scenes';

class App extends Component {
  render() {
    return (
       // <View>
       //   <Input/>
       //   <ResultList/>
       // </View>
       <View style={{ flex: 1 }}>
         <Scenes />
       </View>
    );
  }
}

export default App;
