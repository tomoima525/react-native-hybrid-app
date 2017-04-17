import { connect } from 'react-redux';
import ResultList from '../components/ResultList';
import receivePosts from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.items
  }
}

export default connect(mapStateToProps, null)(ResultList)
