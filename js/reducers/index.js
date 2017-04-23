import { combineReducers } from 'redux';
import searchResult from './searchResult';
import postByKey from './posts';
import visibilityFilter from './visibilityFilter';

const chuckNorris = combineReducers({
  visibilityFilter,
  searchResult,
  postByKey
});

export default chuckNorris;
