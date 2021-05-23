import * as actionTypes from '../constants/constants';

export const languagesListReducer = (
  state = { languagesList: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_LANGUAGES_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_LANGUAGES_LIST_SUCCESS:
      return {
        languagesList: payload,
        loading: false
      };
    case actionTypes.GET_LANGUAGES_LIST_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
