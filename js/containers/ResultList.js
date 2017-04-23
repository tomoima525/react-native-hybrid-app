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
      isFetching: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.result) {
      this.setState({
        isFetching: true,
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
  console.log(state);
  return {
    result: state.searchResult
  }
}

export default connect(mapStateToProps)(ResultList);
