import {
  NAME_ONE_TB_COMBINE,
  NAME_TWO_TB_COMBINE,
  COMBINE_NAMES_REQUEST,
  COMBINE_NAMES_SUCCESS,
  COMBINE_NAMES_ERROR,
} from '../actions/types';

const initialState = {
  nameOne: '',
  nameTwo: '',
  categoryOptions: [
    {
      name: 'Anime',
    },
    {
      name: 'Fancy',
    },
    {
      name: 'Heroic',
    },
    {
      name: 'Traditional',
    },
    {
      name: 'Modern',
    },
    {
      name: 'Funny',
    },
  ],
  genderOptions: [
    {
      name: 'Boy',
    },
    {
      name: 'Girl',
    },
  ],
  categorySelected: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME_ONE_TB_COMBINE:
      return {...state, nameOne: action.payload};
    case NAME_TWO_TB_COMBINE:
      return {...state, nameTwo: action.payload};
    case COMBINE_NAMES_REQUEST:
      return {...state, loading: true};
    case COMBINE_NAMES_SUCCESS:
      return {...state, loading: false};
    case COMBINE_NAMES_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
