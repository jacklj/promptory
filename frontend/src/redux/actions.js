export const actionTypes = {
  WORD: {
    CHANGE: 'WORD.CHANGE',
  },
};

export const changeWord = word => ({
  type: actionTypes.WORD.CHANGE,
  word,
});
