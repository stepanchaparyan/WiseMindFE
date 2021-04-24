import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

export const getHomeImages = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_HOME_IMAGES_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/home/images`);

    dispatch({
      type: actionTypes.GET_HOME_IMAGES_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_HOME_IMAGES_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
