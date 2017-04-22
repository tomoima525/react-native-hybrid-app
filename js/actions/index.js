/*
 * Action types
 */

export const INPUT_KEYWORD = 'INPUT_KEYWORD';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
  INITIAL: 'INITIAL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  LOADING: 'LOADING'
};

/*
 * Action creators
 */
export const inputKeyword = (text) => {
  return {type: INPUT_KEYWORD, text}
};

export const requestPosts = ( key ) => {
  return {
    type: REQUEST_POSTS,
    payload: key
  }
};

export const receivePosts = ( response ) => {
  return {
    type: RECEIVE_POSTS,
    payload: response.result
  }
};

export const setVisibilityFilter = (filter) => {
  return {type: SET_VISIBILITY_FILTER, filter}
};
