import * as actionTypes from '../constants/constants';

export const treatmentsTextsReducer = (
  state = { treatmentsTexts: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_TREATMENTS_TEXTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_TREATMENTS_TEXTS_SUCCESS:
      return {
        treatmentsTexts: payload,
        loading: false
      };
    case actionTypes.GET_TREATMENTS_TEXTS_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
