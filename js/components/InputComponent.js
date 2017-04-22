import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

class InputComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.hint
    }
  }
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
      }}>
        <TextInput style={{
          height: 40,
          width: 200,
          paddingLeft: 10,
          marginLeft: 10,
          borderColor: 'gray',
          borderWidth: 1
        }} onChangeText={(text) => this.setState({text: text})} value={this.state.text}/>

        <Button onPress={() => this.props.onButtonPress(this.state.text)} title="Press Me" accessibilityLabel="alert"/>
      </View>
    );
  }
}

InputComponent.propTypes = {
  hint: PropTypes.string,
  onButtonPress: PropTypes.func.isRequired
}

export default InputComponent;
