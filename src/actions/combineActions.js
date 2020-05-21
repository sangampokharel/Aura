import {
  NAME_ONE_TB_COMBINE,
  NAME_TWO_TB_COMBINE,
  COMBINE_NAMES_REQUEST,
  COMBINE_NAMES_SUCCESS,
  COMBINE_NAMES_ERROR,
} from './types';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const nameOneTBCombine = value => {
  return {
    type: NAME_ONE_TB_COMBINE,
    payload: value,
  };
};

export const nameTwoTBCombine = value => {
  return {
    type: NAME_TWO_TB_COMBINE,
    payload: value,
  };
};

export const combineNamesRequest = () => {
  return {
    type: COMBINE_NAMES_REQUEST,
  };
};

export const combineNamesSuccess = () => {
  return {
    type: COMBINE_NAMES_SUCCESS,
  };
};

export const combineNamesError = () => {
  return {
    type: COMBINE_NAMES_ERROR,
  };
};

export function combineNames(applicationId, noteText) {
  return function action(dispatch) {
    dispatch(combineNamesRequest());

    const request = axios({
      method: 'GET',
      url: global.host + '/api/ApplicationNote/CreateNote',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        ApplicationId: applicationId,
        Note: noteText,
      },
    });

    return request.then(
      response => {
        if (response.status == 200) {
          dispatch(combineNamesSuccess());
        } else {
          dispatch(combineNamesError());

          if (Platform.OS === 'android') {
            ToastAndroid.showWithGravityAndOffset(
              'Error: ' + response.data.message,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              0,
              50,
            );
          } else {
            Alert.alert('Error: ' + response.data.message);
          }
        }
      },
      error => {
        dispatch(combineNamesError());

        if (Platform.OS === 'android') {
          ToastAndroid.showWithGravityAndOffset(
            error,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            50,
          );
        } else {
          Alert.alert(error);
        }
      },
    );
  };
}
