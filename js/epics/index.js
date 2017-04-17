import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import posts from './posts';
import visibilityFilter from './visibilityFilter

const chuckEpic = combineEpics({
  getNorris
});

export default chuckEpic;
