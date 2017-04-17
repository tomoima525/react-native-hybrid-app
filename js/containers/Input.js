import { connect } from 'react-redux';
import Input from '../components/Input';
import requestPosts from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonPress: (text) => {
      dispatch(requestPosts(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(Input)
