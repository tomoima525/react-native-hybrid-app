import {RECEIVE_POSTS} from '../actions';

const searchResult = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: true,
        items: action.payload
      };

    default:
      return state;
  }
};
export default searchResult;
