import {
  EMAIL_SWITCH_NOTIFICATIONS_TEXTBOX,
  NOTIFICATION_SWITCH_NOTIFICATIONS_TEXTBOX,
  MESSAGE_SWITCH_NOTIFICATIONS_TEXTBOX,
  PHONE_SWITCH_NOTIFICATIONS_TEXTBOX,
  SAVE_NOTIFICATIONS_SETTINGS_REQUEST,
  SAVE_NOTIFICATIONS_SETTING_SUCCESS_FAILURE_ERROR,
} from '../actions/types';

const initialState = {
  emailStatus: false,
  notificationStatus: false,
  messageStatus: false,
  phoneStatus: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SWITCH_NOTIFICATIONS_TEXTBOX:
      return {...state, emailStatus: action.payload};
    case NOTIFICATION_SWITCH_NOTIFICATIONS_TEXTBOX:
      return {...state, notificationStatus: action.payload};
    case MESSAGE_SWITCH_NOTIFICATIONS_TEXTBOX:
      return {...state, messageStatus: action.payload};
    case PHONE_SWITCH_NOTIFICATIONS_TEXTBOX:
      return {...state, phoneStatus: action.payload};
    case SAVE_NOTIFICATIONS_SETTINGS_REQUEST:
      return {...state, loading: true};
    case SAVE_NOTIFICATIONS_SETTING_SUCCESS_FAILURE_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};
