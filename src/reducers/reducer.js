const initialState = {
  time: {
    minutes: 15,
    seconds: 0
  }
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default reducer;