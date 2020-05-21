import {
  FIRST_NAME_EDIT_PROFILE_TEXTBOX,
  LAST_NAME_EDIT_PROFILE_TEXTBOX,
  EMAIL_EDIT_PROFILE_TEXTBOX,
  PHONE_EDIT_PROFILE_TEXTBOX,
  DOB_EDIT_PROFILE_TEXTBOX,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dob: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRST_NAME_EDIT_PROFILE_TEXTBOX:
      return {...state, firstName: action.payload};
    case LAST_NAME_EDIT_PROFILE_TEXTBOX:
      return {...state, lastName: action.payload};
    case EMAIL_EDIT_PROFILE_TEXTBOX:
      return {...state, email: action.payload};
    case PHONE_EDIT_PROFILE_TEXTBOX:
      return {...state, phone: action.payload};
    case DOB_EDIT_PROFILE_TEXTBOX:
      return {...state, dob: action.payload};
    case EDIT_PROFILE_REQUEST:
      return {...state, loading: true};
    case EDIT_PROFILE_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
