import {
  FIRST_NAME_EDIT_PROFILE_TEXTBOX,
  LAST_NAME_EDIT_PROFILE_TEXTBOX,
  EMAIL_EDIT_PROFILE_TEXTBOX,
  PHONE_EDIT_PROFILE_TEXTBOX,
  DOB_EDIT_PROFILE_TEXTBOX,
  GENDER_EDIT_PROFILE_TEXTBOX,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS_FAILURE_ERROR,
} from './types';

import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid, Alert, Platform} from 'react-native';
import axios from 'axios';

import NavigationService from '../route/navigationService';

export const firstNameEditProfileTextBox = value => {
  return {
    type: FIRST_NAME_EDIT_PROFILE_TEXTBOX,
    payload: value,
  };
};

export const lastNameEditProfileTextBox = value => {
  return {
    type: LAST_NAME_EDIT_PROFILE_TEXTBOX,
    payload: value,
  };
};

export const emailEditProfileTextBox = value => {
  return {
    type: EMAIL_EDIT_PROFILE_TEXTBOX,
    payload: value,
  };
};

export const phoneEditProfileTextBox = value => {
  return {
    type: PHONE_EDIT_PROFILE_TEXTBOX,
    payload: value,
  };
};

export const dobEditProfileTextBox = value => {
  return {
    type: DOB_EDIT_PROFILE_TEXTBOX,
    payload: value,
  };
};

export const genderEditProfileTextBox = value => {
  return {
    type: GENDER_EDIT_PROFILE_TEXTBOX,
    payload: value,
  };
};

export const editProfileRequest = () => {
  return {
    type: EDIT_PROFILE_REQUEST,
  };
};

export const editProfileSuccessFailureError = () => {
  return {
    type: EDIT_PROFILE_SUCCESS_FAILURE_ERROR,
  };
};

export function fetchEditProfile() {
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
    //   dispatch(editProfileRequest());
    //   setTimeout(() => {
    //     global.loggedIn = true;
    //     AsyncStorage.setItem(
    //       'KeyLoggedInStatus',
    //       JSON.stringify(global.loggedIn),
    //     );
    //     dispatch(editProfileSuccessFailureError());
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
    //         dispatch(editProfileSuccessFailureError());
    //       }
    //     }
    //   })
    //   .catch(error => {
    //     dispatch(editProfileSuccessFailureError());
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

export function saveEditProfile(
  firstName,
  lastName,
  email,
  phone,
  dob,
  gender,
) {
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
    //   dispatch(editProfileRequest());
    //   setTimeout(() => {
    //     global.loggedIn = true;
    //     AsyncStorage.setItem(
    //       'KeyLoggedInStatus',
    //       JSON.stringify(global.loggedIn),
    //     );
    //     dispatch(editProfileSuccessFailureError());
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
    //         dispatch(editProfileSuccessFailureError());
    //       }
    //     }
    //   })
    //   .catch(error => {
    //     dispatch(editProfileSuccessFailureError());
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
