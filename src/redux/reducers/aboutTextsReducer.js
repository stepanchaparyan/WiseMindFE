import * as actionTypes from '../constants/constants';

export const aboutTextsReducer = (
  state = { aboutTexts: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_ABOUT_TEXTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_ABOUT_TEXTS_SUCCESS:
      return {
        aboutTexts: payload,
        loading: false
      };
    case actionTypes.GET_ABOUT_TEXTS_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
