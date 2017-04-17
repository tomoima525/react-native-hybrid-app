import { combineReducers } from 'redux';
import input from './input';
import posts from './posts';
import visibilityFilter from './visibilityFilter'

const chuckNorris = combineReducers({
  visibilityFilter,
  input,
  posts
});

export default chuckNorris;
