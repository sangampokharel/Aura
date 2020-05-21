import {
  EMAIL_SWITCH_NOTIFICATIONS_TEXTBOX,
  NOTIFICATION_SWITCH_NOTIFICATIONS_TEXTBOX,
  MESSAGE_SWITCH_NOTIFICATIONS_TEXTBOX,
  PHONE_SWITCH_NOTIFICATIONS_TEXTBOX,
  SAVE_NOTIFICATIONS_SETTINGS_REQUEST,
  SAVE_NOTIFICATIONS_SETTING_SUCCESS_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const emailSwitch = value => {
  return {
    type: EMAIL_SWITCH_NOTIFICATIONS_TEXTBOX,
    payload: value,
  };
};

export const notificationSwitch = value => {
  return {
    type: NOTIFICATION_SWITCH_NOTIFICATIONS_TEXTBOX,
    payload: value,
  };
};

export const messageSwitch = value => {
  return {
    type: MESSAGE_SWITCH_NOTIFICATIONS_TEXTBOX,
    payload: value,
  };
};

export const phoneSwitch = value => {
  return {
    type: PHONE_SWITCH_NOTIFICATIONS_TEXTBOX,
    payload: value,
  };
};

export const saveNotificationsSettingRequest = () => {
  return {
    type: SAVE_NOTIFICATIONS_SETTINGS_REQUEST,
  };
};

export const saveNotificationsSettingSuccessFailureError = () => {
  return {
    type: SAVE_NOTIFICATIONS_SETTING_SUCCESS_FAILURE_ERROR,
  };
};

export function saveNotificationsSetting(currentPassword, newPassword) {
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
    //   dispatch(saveNotificationsSettingRequest());
    //   setTimeout(() => {
    //     global.loggedIn = true;
    //     AsyncStorage.setItem(
    //       'KeyLoggedInStatus',
    //       JSON.stringify(global.loggedIn),
    //     );
    //     dispatch(saveNotificationsSettingSuccessFailureError());
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
    //         dispatch(saveNotificationsSettingSuccessFailureError());
    //       }
    //     }
    //   })
    //   .catch(error => {
    //     dispatch(saveNotificationsSettingSuccessFailureError());
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
