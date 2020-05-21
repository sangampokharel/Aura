import {
  EMAIL_FORGOT_PASS_TEXTBOX,
  SAVE_FORGOT_PASS_DATA_REQUEST,
  SAVE_FORGOT_PASS_DATA_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  email: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_FORGOT_PASS_TEXTBOX:
      return {...state, email: action.payload};
    case SAVE_FORGOT_PASS_DATA_REQUEST:
      return {...state, loading: true};
    case SAVE_FORGOT_PASS_DATA_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
