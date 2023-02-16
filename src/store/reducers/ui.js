let initialState = {
  title: ''
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload.newTitle
      };

    default:
      return state;
  }
}

export default uiReducer;