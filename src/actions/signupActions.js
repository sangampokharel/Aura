import {
  EMAIL_SIGNUP_TEXTBOX,
  FIRST_NAME_SIGNUP_TEXTBOX,
  LAST_NAME_SIGNUP_TEXTBOX,
  PASSWORD_SIGNUP_TEXTBOX,
  SAVE_SIGNUP_DATA_REQUEST,
  SAVE_SIGNUP_DATA_SUCCESS_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const emailSignupTextBox = userEmail => {
  return {
    type: EMAIL_SIGNUP_TEXTBOX,
    payload: userEmail,
  };
};

export const firstNameSignupTextBox = userFirstName => {
  return {
    type: FIRST_NAME_SIGNUP_TEXTBOX,
    payload: userFirstName,
  };
};

export const lastNameSignupTextBox = userLastName => {
  return {
    type: LAST_NAME_SIGNUP_TEXTBOX,
    payload: userLastName,
  };
};

export const passwordSignupTextBox = userPassword => {
  return {
    type: PASSWORD_SIGNUP_TEXTBOX,
    payload: userPassword,
  };
};

export const saveSignupDataRequest = () => {
  return {
    type: SAVE_SIGNUP_DATA_REQUEST,
  };
};

export const saveSignupDataSuccessFailureError = () => {
  return {
    type: SAVE_SIGNUP_DATA_SUCCESS_FAILURE_ERROR,
  };
};

export function saveSignupData(email, password) {
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
      dispatch(saveSignupDataRequest());
      setTimeout(() => {
        global.loggedIn = true;
        AsyncStorage.setItem(
          'KeyLoggedInStatus',
          JSON.stringify(global.loggedIn),
        );
        NavigationService.navigateReset('DashboardRoute');

        dispatch(saveSignupDataSuccessFailureError());
      }, 1000);

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
      //         dispatch(saveSignupDataSuccessFailureError());
      //       }
      //     }
      //   })
      //   .catch(error => {
      //     dispatch(saveSignupDataSuccessFailureError());
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
