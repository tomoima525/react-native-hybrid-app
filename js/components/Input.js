import React, {PropTypes, Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Input keyword'
    };
  }
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }} onChangeText={(text) => this.setState({text})} value={this.state.text}/>

        <Button onPress={() => onButtonPress(this.state.text)} title="Press Me" accessibilityLabel="alert"/>
      </View>
    );
  }

}

Input.propTypes = {
  onButtonPress: PropTypes.func.isRequired
}
export default Input
