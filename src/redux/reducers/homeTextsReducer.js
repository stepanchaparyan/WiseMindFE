import * as actionTypes from '../constants/constants';

export const homeTextsReducer = (state = { homeTexts: [], loading: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_HOME_TEXTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_HOME_TEXTS_SUCCESS:
      return {
        homeTexts: payload,
        loading: false
      };
    case actionTypes.GET_HOME_TEXTS_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
