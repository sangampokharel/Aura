import {
  CURRENT_PASSWORD_CHANGE_PASSWORD_TEXTBOX,
  NEW_PASSWORD_CHANGE_PASSWORD_TEXTBOX,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const currentPasswordChangeTextBox = value => {
  return {
    type: CURRENT_PASSWORD_CHANGE_PASSWORD_TEXTBOX,
    payload: value,
  };
};

export const newPasswordChangeTextBox = value => {
  return {
    type: NEW_PASSWORD_CHANGE_PASSWORD_TEXTBOX,
    payload: value,
  };
};

export const changePasswordRequest = () => {
  return {
    type: CHANGE_PASSWORD_REQUEST,
  };
};

export const changePasswordSuccessFailureError = () => {
  return {
    type: CHANGE_PASSWORD_SUCCESS_FAILURE_ERROR,
  };
};

export function changePassword(currentPassword, newPassword) {
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
    //   dispatch(changePasswordRequest());
    //   setTimeout(() => {
    //     global.loggedIn = true;
    //     AsyncStorage.setItem(
    //       'KeyLoggedInStatus',
    //       JSON.stringify(global.loggedIn),
    //     );
    //     dispatch(changePasswordSuccessFailureError());
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
    //         dispatch(changePasswordSuccessFailureError());
    //       }
    //     }
    //   })
    //   .catch(error => {
    //     dispatch(changePasswordSuccessFailureError());
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
