import React from 'react';
import {View, Text, StyleSheet} from "react-native";
//import Button from "react-native-button";
//import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

const DetailComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.item}</Text>
    </View>
  );
}
export default DetailComponent;
