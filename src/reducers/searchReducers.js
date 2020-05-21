import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_TEXT_TEXTBOX,
} from '../actions/types';

const initialState = {
  nameOne: '',
  nameTwo: '',
  searchedText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {...state, loading: true};
    case SEARCH_SUCCESS:
      return {...state, loading: false};
    case SEARCH_ERROR:
      return {...state, loading: false};
    case SEARCH_TEXT_TEXTBOX:
      return {...state, searchedText: action.payload};
    default:
      return state;
  }
};
