import React, {PropTypes, Component} from 'react';
import {View,ListView,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ResultListComponent from '../components/ResultListComponent';
import receivePosts from '../actions';

//Container for result
class ResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.result) {
      this.setState({
        loading: nextProps.visibilityFilter.loading,
        items: nextProps.result.items
      });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.separator}/>
        <ResultListComponent
          items={this.state.items}
          isFetching={this.state.loading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    flexDirection: 'row',
    height: 3,
    backgroundColor: '#EEEEEE',
  },
});

ResultList.propTypes = {
  result: PropTypes.object,
}


const mapStateToProps = (state) => {
  return {
    result: state.searchResult,
    visibilityFilter: state.visibilityFilter,
  }
}

export default connect(mapStateToProps)(ResultList);
