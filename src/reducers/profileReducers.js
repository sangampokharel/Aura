import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  profileData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return {...state, loading: true};
    case FETCH_PROFILE_SUCCESS:
      return {...state, loading: false, profileData: action.payload};
    case FETCH_PROFILE_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
