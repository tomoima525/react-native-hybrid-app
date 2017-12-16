import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
        marginTop: 20,
        marginRight: 10
      }}>
        <TextInput style={{
          height: 40,
          width: 200,
          paddingLeft: 10,
          marginLeft: 10,
        }}
        underlineColorAndroid="blue"
        autoCapitalize={'none'}
        onChangeText={(text) => this.setState({text: text})}
        placeholder={this.state.text}/>

        <Button
          onPress={() => this.props.onButtonPress(this.state.text)}
          title="Search"
          accessibilityLabel="alert"/>
      </View>
    );
  }
}

InputComponent.propTypes = {
  hint: PropTypes.string,
  onButtonPress: PropTypes.func.isRequired
}

export default InputComponent;
