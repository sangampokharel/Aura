import {
  NAME_MEANING_TEXTBOX,
} from './types';

export const nameMeaningTextbox = value => {
  return {
    type: NAME_MEANING_TEXTBOX,
    payload: value,
  };
};
