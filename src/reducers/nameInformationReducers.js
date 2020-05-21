import {
  NAME_INFORMATION_REQUEST,
  NAME_INFORMATION_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME_INFORMATION_REQUEST:
      return {...state, loading: true};
    case NAME_INFORMATION_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
