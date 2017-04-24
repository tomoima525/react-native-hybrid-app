import {REQUEST_POSTS} from '../actions';

// const posts = (state = {
//   isFetching: false,
//   items: []
// }, action) => {
//   switch (action.type) {
//     case REQUEST_POSTS:
//       return {...state,
//           isFetching: true
//       };
//     default:
//       return state;
//   }
// };

const postByKey = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {...state,
          //[action.payload]: posts(state[action.payload], action)
          [action.payload]: state,
      };
    default:
      return state;
  }
};

export default postByKey;
