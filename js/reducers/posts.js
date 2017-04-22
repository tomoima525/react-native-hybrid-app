import {REQUEST_POSTS, RECEIVE_POSTS} from '../actions';

const posts = (state = {
  isFetching: false,
  items: []
}, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        items: action.payload
      });
    default:
      return state;
  }
};

const postByKey = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.payload]: posts(state[action.payload], action)
      });
    default:
      return state;
  }
};

export default postByKey;
