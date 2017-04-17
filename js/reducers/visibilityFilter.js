import {SET_VISIBILITY_FILTER, INPUT_KEYWORD, VisibilityFilters} from './actions';
const {INITIAL} = VisibilityFilters;

const visibilityFilter = (state = INITIAL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
