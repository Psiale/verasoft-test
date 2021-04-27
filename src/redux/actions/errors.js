import SET_ERROR from '../constants/errors';

const setError = error => ({
  type: SET_ERROR,
  error,
});

export default setError;
