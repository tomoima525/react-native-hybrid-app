import React from 'react';
import { HeaderBackButton } from 'react-navigation';
import PropTypes from 'prop-types';
import { Platform, View, StyleSheet, TouchableHighlight, TouchableNativeFeedback, Text } from 'react-native';

// Component for Back Buttons

const styles = StyleSheet.create({
  barBackButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'left',
    fontSize: 17,
    paddingLeft: 6,
  },
});

const BaseBackButton = props => (
  <HeaderBackButton
    onPress={() => props.onPress()}
    title={props.backTitle}
    titleStyle={styles.barBackButtonText}
  />
);

BaseBackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  backTitle: PropTypes.string.isRequired,
};

export const BackButtonAndroid = (props, context) => (
  <BaseBackButton
    onPress={() => safeBackOnPress(props.onPress)}
    backTitle={props.backTitle}
  />
);

export const BackButtonIos = props => (
  <BaseBackButton
    onPress={
      props.onPress ? props.onPress : Actions.pop
    }
    backTitle={props.backTitle}
/>
);

export const BackButton = props => Platform.select({
  ios: () => <BackButtonIos {...props} />,
  android: () => <BackButtonAndroid {...props} />,
})();
