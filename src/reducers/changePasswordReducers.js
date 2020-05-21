import {
  CURRENT_PASSWORD_CHANGE_PASSWORD_TEXTBOX,
  NEW_PASSWORD_CHANGE_PASSWORD_TEXTBOX,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  currentPassword: '',
  newPassword: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_PASSWORD_CHANGE_PASSWORD_TEXTBOX:
      return {...state, currentPassword: action.payload};
    case NEW_PASSWORD_CHANGE_PASSWORD_TEXTBOX:
      return {...state, newPassword: action.payload};
    case CHANGE_PASSWORD_REQUEST:
      return {...state, loading: true};
    case CHANGE_PASSWORD_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
