import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const fetchProfileRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST,
  };
};

export const fetchProfileSuccess = (data) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: data
  };
};

export const fetchProfileFailureError = () => {
  return {
    type: FETCH_PROFILE_FAILURE_ERROR,
  };
};

export function fetchProfile() {
  return function action(dispatch) {

    //
    // if (email == '' || password == '') {
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Enter valid login credentials.',
    //     ToastAndroid.LONG,
    //     ToastAndroid.BOTTOM,
    //     0,
    //     50,
    //   );
    // } else {
    //   dispatch(fetchProfileRequest());
    //   setTimeout(() => {
    //     global.loggedIn = true;
    //     AsyncStorage.setItem('KeyLoggedInStatus', JSON.stringify(global.loggedIn));
    //     dispatch(fetchProfileFailureError());
    //   }, 2000);

      //
      // fetch('https://url', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then(response => response.json())
      //   .then(response => {
      //     if (response.access_token) {
      //       console.log('Fetch Access Token Success');
      //       dispatch(fetchProfileSuccess());

      //     } else {
      //       console.log('Fetch Access Token Failed');
      //
      //       if (response.error == 'phone_not_verified') {
      //         dispatch(showHideVerificationAlert(true, true));
      //       } else if (response.error == 'email_not_verified') {
      //         dispatch(showHideVerificationAlert(true, false));
      //       } else {
      //         if (Platform.OS === 'android') {
      //           ToastAndroid.showWithGravityAndOffset(
      //             'Error: ' + response.message,
      //             ToastAndroid.LONG,
      //             ToastAndroid.BOTTOM,
      //             0,
      //             50,
      //           );
      //         } else {
      //           Alert.alert('Error: ' + response.message);
      //         }
      //         dispatch(fetchProfileFailureError());
      //       }
      //     }
      //   })
      //   .catch(error => {
      //     dispatch(fetchProfileFailureError());
      //     ToastAndroid.showWithGravityAndOffset(
      //       error,
      //       ToastAndroid.LONG,
      //       ToastAndroid.BOTTOM,
      //       0,
      //       50,
      //     );
      //   });
  //  }
  };
}
