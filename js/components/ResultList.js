import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';

class ResultList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(props.list)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list.length) {
      this.setState({
        ...this.state,
        refreshing: true,
        dataSource: this.state.dataSource.cloneWithRows(nextProps.list)
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row obj={data} onPress={}/>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
          enableEmptySections={true}/>
      </View>
    )
  }

}

const Row = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Text style= {styles.rowLayout}>{props.value}</Text>
    </TouchableHighlight>
  );
}

ResultList.propTypes = {
  list: PropTypes.array
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
