import inputKeyword from '../actions';

const input = (state = [], action) => {
  switch (action.type) {
    case INPUT_KEYWORD:
      return [
        ...state, {
          text: action.text
        }
      ];

    default:
      return state;
  }
};
