import {
  APP_SETTINGS_REQUEST,
  APP_SETTINGS_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_SETTINGS_REQUEST:
      return {...state, loading: true};
    case APP_SETTINGS_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
