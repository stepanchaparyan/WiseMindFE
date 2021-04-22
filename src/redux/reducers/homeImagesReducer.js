import * as actionTypes from '../constants/constants';

export const homeImagesReducer = (
  state = { homeImages: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_HOME_IMAGES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_HOME_IMAGES_SUCCESS:
      return {
        homeImages: payload,
        loading: false
      };
    case actionTypes.GET_HOME_IMAGES_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
