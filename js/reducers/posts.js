import {REQUEST_POSTS, RECEIVE_POSTS} from './actions';

const posts = (state = {
  isFetching: false,
  items: []
}, action) =>{
   switch (ation.type) {
     case REQUEST_POSTS:
       return Object.assign({}, state , {
         isFetching: true;
       });
     case RECEIVE_POSTS:
        return Object.assign({}, state , {
          isFetching: true;
          items: action.payload
        });
     default:
       return state;
   }
};

export const postByKey = (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
    return Object.assign({}, state, {
      [action.payload]: posts(state[action.payload], action)
    });
    default:
    return state;
  }
}
