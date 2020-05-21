import {
  EMAIL_LOGIN_TEXTBOX,
  PASSWORD_LOGIN_TEXTBOX,
  SAVE_LOGIN_DATA_REQUEST,
  SAVE_LOGIN_DATA_SUCCESS_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const emailLoginTextBox = userEmail => {
  return {
    type: EMAIL_LOGIN_TEXTBOX,
    payload: userEmail,
  };
};

export const passwordLoginTextBox = userPassword => {
  return {
    type: PASSWORD_LOGIN_TEXTBOX,
    payload: userPassword,
  };
};

export const saveLoginDataRequest = () => {
  return {
    type: SAVE_LOGIN_DATA_REQUEST,
  };
};

export const saveLoginDataSuccessFailureError = () => {
  return {
    type: SAVE_LOGIN_DATA_SUCCESS_FAILURE_ERROR,
  };
};

export function saveLoginData(email, password) {
  return function action(dispatch) {
    if (email == '' || password == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Enter valid login credentials.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
    } else {
      dispatch(saveLoginDataRequest());
      setTimeout(() => {
        global.loggedIn = true;
        AsyncStorage.setItem(
          'KeyLoggedInStatus',
          JSON.stringify(global.loggedIn),
        );
        NavigationService.navigateReset('DashboardRoute');

        dispatch(saveLoginDataSuccessFailureError());
      }, 2000);

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
      //         dispatch(saveLoginDataSuccessFailureError());
      //       }
      //     }
      //   })
      //   .catch(error => {
      //     dispatch(saveLoginDataSuccessFailureError());
      //     ToastAndroid.showWithGravityAndOffset(
      //       error,
      //       ToastAndroid.LONG,
      //       ToastAndroid.BOTTOM,
      //       0,
      //       50,
      //     );
      //   });
    }
  };
}
