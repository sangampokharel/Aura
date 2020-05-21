import {
  EMAIL_LOGIN_TEXTBOX,
  PASSWORD_LOGIN_TEXTBOX,
  SAVE_LOGIN_DATA_REQUEST,
  SAVE_LOGIN_DATA_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_LOGIN_TEXTBOX:
      return {...state, email: action.payload};
    case PASSWORD_LOGIN_TEXTBOX:
      return {...state, password: action.payload};
    case SAVE_LOGIN_DATA_REQUEST:
      return {...state, loading: true};
    case SAVE_LOGIN_DATA_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
