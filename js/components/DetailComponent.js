import React from 'react';
import {View, Text, StyleSheet} from "react-native";
//import Button from "react-native-button";
//import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  textLayout: {
    padding: 10,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
});

const DetailComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLayout}>
        {props.item}
      </Text>
    </View>
  );
}
export default DetailComponent;
