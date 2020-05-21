import {LOGOUT_DIALOG} from './types';

export const logoutDialog = status => {
  return {
    type: LOGOUT_DIALOG,
    payload: status,
  };
};
