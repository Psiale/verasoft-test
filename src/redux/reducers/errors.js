import SET_ERROR from '../constants/errors';

const initialState = []

const errorReducer = (state = initialState, action) => {
  if (action.type === SET_ERROR) {
    return [...state, action.error];
  }
  return state;
};
export default errorReducer;
