import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const createURL = lang => {
  return `${BASE_URL}/${lang}/menus`;
};

export const getNavbar = lang => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_NAVBAR_REQUEST });

    const { data } = await axios.get(createURL(lang));

    dispatch({
      type: actionTypes.GET_NAVBAR_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NAVBAR_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
