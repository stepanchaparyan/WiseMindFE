import * as actionTypes from '../constants/constants';

export const footerReducer = (state = { footer: [], loading: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_FOOTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_FOOTER_SUCCESS:
      return {
        footer: payload,
        loading: false
      };
    case actionTypes.GET_FOOTER_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
