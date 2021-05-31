import * as actionTypes from '../constants/constants';

export const clientResourcesReducer = (
  state = { clientResources: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_CLIENT_RESOURCES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_CLIENT_RESOURCES_SUCCESS:
      return {
        clientResources: payload,
        loading: false
      };
    case actionTypes.GET_CLIENT_RESOURCES_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
