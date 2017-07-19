import { actionTypes } from './actions';

const initialState = {
  word: '',
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.WORD.CHANGE:
      return {
        word: action.word,
      };
    default:
      return state;
  }
};

export default reducer;
