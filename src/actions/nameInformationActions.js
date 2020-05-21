import {
  NAME_INFORMATION_REQUEST,
  NAME_INFORMATION_SUCCESS_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const nameInformationRequest = () => {
  return {
    type: NAME_INFORMATION_REQUEST,
  };
};

export const nameInformationSuccessFailureError = () => {
  return {
    type: NAME_INFORMATION_SUCCESS_FAILURE_ERROR,
  };
};

export function nameInformation() {
  return function action(dispatch) {
    // if (email == '' || password == '') {
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Enter valid login credentials.',
    //     ToastAndroid.LONG,
    //     ToastAndroid.BOTTOM,
    //     0,
    //     50,
    //   );
    // } else {
    //   dispatch(nameInformationRequest());
    //   setTimeout(() => {
    //     global.loggedIn = true;
    //     AsyncStorage.setItem(
    //       'KeyLoggedInStatus',
    //       JSON.stringify(global.loggedIn),
    //     );
    //     dispatch(nameInformationSuccessFailureError());
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
    //         dispatch(nameInformationSuccessFailureError());
    //       }
    //     }
    //   })
    //   .catch(error => {
    //     dispatch(nameInformationSuccessFailureError());
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
