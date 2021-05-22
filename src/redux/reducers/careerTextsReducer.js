import * as actionTypes from '../constants/constants';

export const careerTextsReducer = (
  state = { careerTexts: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_CAREER_TEXTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_CAREER_TEXTS_SUCCESS:
      return {
        careerTexts: payload,
        loading: false
      };
    case actionTypes.GET_CAREER_TEXTS_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
