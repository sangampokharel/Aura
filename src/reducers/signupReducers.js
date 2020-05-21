import {
  EMAIL_SIGNUP_TEXTBOX,
  FIRST_NAME_SIGNUP_TEXTBOX,
  LAST_NAME_SIGNUP_TEXTBOX,
  PASSWORD_SIGNUP_TEXTBOX,
  SAVE_SIGNUP_DATA_REQUEST,
  SAVE_SIGNUP_DATA_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SIGNUP_TEXTBOX:
      return {...state, email: action.payload};
    case FIRST_NAME_SIGNUP_TEXTBOX:
      return {...state, firstName: action.payload};
    case LAST_NAME_SIGNUP_TEXTBOX:
      return {...state, lastName: action.payload};
    case PASSWORD_SIGNUP_TEXTBOX:
      return {...state, password: action.payload};
    case SAVE_SIGNUP_DATA_REQUEST:
      return {...state, loading: true};
    case SAVE_SIGNUP_DATA_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
