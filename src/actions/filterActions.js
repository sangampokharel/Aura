import {
  SURNAME_FILTER_TEXTBOX,
  APPLY_FILTER_REQUEST,
  APPLY_FILTER_SUCCESS_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const surnameFilterTextBox = value => {
  return {
    type: SURNAME_FILTER_TEXTBOX,
    payload: value,
  };
};

export const applyFilterRequest = () => {
  return {
    type: APPLY_FILTER_REQUEST,
  };
};

export const applyFilterSuccessFailureError = () => {
  return {
    type: APPLY_FILTER_SUCCESS_FAILURE_ERROR,
  };
};

export function applyFilter() {
  return function action(dispatch) {
    NavigationService.back();
    // if (email == '' || password == '') {
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Enter valid login credentials.',
    //     ToastAndroid.LONG,
    //     ToastAndroid.BOTTOM,
    //     0,
    //     50,
    //   );
    // } else {
    //   dispatch(applyFilterRequest());
    //   setTimeout(() => {
    //     global.loggedIn = true;
    //     AsyncStorage.setItem(
    //       'KeyLoggedInStatus',
    //       JSON.stringify(global.loggedIn),
    //     );
    //     dispatch(applyFilterSuccessFailureError());
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
    //
    //       dispatch(
    //         postFirebaseToken(
    //           response.expires_in.toString(),
    //           response.access_token,
    //         ),
    //       );
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
    //         dispatch(applyFilterSuccessFailureError());
    //       }
    //     }
    //   })
    //   .catch(error => {
    //     dispatch(applyFilterSuccessFailureError());
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
