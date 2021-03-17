import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const createURL = lang => {
  return `${BASE_URL}/${lang}/footer`;
};

export const getFooter = lang => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_FOOTER_REQUEST });

    const { data } = await axios.get(createURL(lang));

    dispatch({
      type: actionTypes.GET_FOOTER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_FOOTER_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
