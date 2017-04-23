import React, {PropTypes} from 'react';
import {ListView, Text, StyleSheet, TouchableHighlight, View} from 'react-native';

const ResultListComponent = (props) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  console.log(props.items);
  if(!props.items){
    return (
      <View>
        <Text style= {styles.rowLayout}>No result</Text>
      </View>
  );
  }
  return (
      <View >
        <ListView
          dataSource={ds.cloneWithRows(props.items)}
          renderRow={(data) => <Row obj={data}/>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
          enableEmptySections={true}/>
      </View>
    );
}

const Row = (props) => {
  return (
    <TouchableHighlight >
      <Text style= {styles.rowLayout}>{props.obj.value}</Text>
    </TouchableHighlight>
  );
}

ResultListComponent.propTypes = {
  items: PropTypes.array,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F6F6F6'
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  },
  rowLayout: {
    padding: 16,
    backgroundColor: '#F6F6F6'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
});

export default ResultListComponent;
