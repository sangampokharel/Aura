import {
  NAME_MEANING_TEXTBOX,
} from '../actions/types';

const initialState = {
  nameMeaning: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME_MEANING_TEXTBOX:
      return {...state, nameMeaning: action.payload};
    default:
      return state;
  }
};
