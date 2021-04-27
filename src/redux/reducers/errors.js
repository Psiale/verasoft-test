import SET_ERROR from '../constants/errors';

const initialState = {
  error: false,
};

const errorReducer = (state = initialState, action) => {
  if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.error,
    };
  }
  return state;
};
export default errorReducer;
