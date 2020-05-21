import {
  EMAIL_FORGOT_PASS_TEXTBOX,
  PASSWORD_FORGOT_PASS_TEXTBOX,
  SAVE_FORGOT_PASS_DATA_REQUEST,
  SAVE_FORGOT_PASS_DATA_SUCCESS_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const emailForgotPassTextBox = userEmail => {
  return {
    type: EMAIL_FORGOT_PASS_TEXTBOX,
    payload: userEmail,
  };
};

export const saveForgotPassDataRequest = () => {
  return {
    type: SAVE_FORGOT_PASS_DATA_REQUEST,
  };
};

export const saveForgotPassDataSuccessFailureError = () => {
  return {
    type: SAVE_FORGOT_PASS_DATA_SUCCESS_FAILURE_ERROR,
  };
};

export function saveForgotPassData(email, password) {
  return function action(dispatch) {


    if (email == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Enter valid login credentials.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
    } else {
      dispatch(saveForgotPassDataRequest());
      setTimeout(() => {
        dispatch(saveForgotPassDataSuccessFailureError());
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
      //         dispatch(saveForgotPassDataSuccessFailureError());
      //       }
      //     }
      //   })
      //   .catch(error => {
      //     dispatch(saveForgotPassDataSuccessFailureError());
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
