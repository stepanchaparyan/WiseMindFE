import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const createURL = lang => {
  return `${BASE_URL}/${lang}/aboutus/texts`;
};

export const getAboutTexts = lang => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_ABOUT_TEXTS_REQUEST });

    const { data } = await axios.get(createURL(lang));
    dispatch({
      type: actionTypes.GET_ABOUT_TEXTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ABOUT_TEXTS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
