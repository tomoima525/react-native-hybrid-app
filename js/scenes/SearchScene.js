import React from 'react';
import { View } from 'react-native';
import Input from '../containers/Input';
import ResultList from '../containers/ResultList';

const SearchScene = () => {
  return (
    <View>
      <Input/>
      <ResultList/>
    </View>
  );
}

export default SearchScene;
