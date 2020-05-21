import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_TEXT_TEXTBOX,
} from './types';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const searchRequest = () => {
  return {
    type: SEARCH_REQUEST,
  };
};

export const searchSuccess = () => {
  return {
    type: SEARCH_SUCCESS,
  };
};

export const searchError = () => {
  return {
    type: SEARCH_ERROR,
  };
};

export const searchTextTextbox = value => {
  return {
    type: SEARCH_TEXT_TEXTBOX,
    payload: value,
  };
};

export function search(text) {
  return function action(dispatch) {
    dispatch(searchRequest());

    const request = axios({
      method: 'GET',
      url: 'url',
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
          dispatch(searchSuccess());
        } else {
          dispatch(searchError());

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
        dispatch(searchError());

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
