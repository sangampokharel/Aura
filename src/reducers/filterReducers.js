import {
  SURNAME_FILTER_TEXTBOX,
  APPLY_FILTER_REQUEST,
  APPLY_FILTER_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  surname: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SURNAME_FILTER_TEXTBOX:
      return {...state, surname: action.payload};
    case APPLY_FILTER_REQUEST:
      return {...state, loading: true};
    case APPLY_FILTER_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
