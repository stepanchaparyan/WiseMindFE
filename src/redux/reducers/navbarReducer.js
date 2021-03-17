import * as actionTypes from '../constants/constants';

export const navbarReducer = (state = { navbar: [], loading: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_NAVBAR_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_NAVBAR_SUCCESS:
      return {
        navbar: payload,
        loading: false
      };
    case actionTypes.GET_NAVBAR_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
