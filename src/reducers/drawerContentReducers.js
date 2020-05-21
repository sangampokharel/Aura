import {
  LOGOUT_DIALOG,
} from '../actions/types';

const initialState = {
  logoutDialog: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_DIALOG:
      return {...state, logoutDialog: action.payload};
    default:
      return state;
  }
};
