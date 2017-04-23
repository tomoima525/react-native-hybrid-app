import React, {PropTypes, Component} from 'react';
import {ListView} from 'react-native';
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
        <ResultListComponent
          items={this.state.items}
        />
    );
  }
}

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
