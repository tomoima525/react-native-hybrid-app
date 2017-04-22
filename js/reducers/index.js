import { combineReducers } from 'redux';
import input from './input';
import postByKey from './posts';
import visibilityFilter from './visibilityFilter';

const chuckNorris = combineReducers({
  visibilityFilter,
  input,
  postByKey
});

export default chuckNorris;
