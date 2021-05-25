import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const createURL = lang => {
  return `${BASE_URL}/${lang}/newsletter/texts`;
};

export const getNewsLettersImages = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_NEWS_LETTERS_IMAGES_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/newsletter/images`);

    dispatch({
      type: actionTypes.GET_NEWS_LETTERS_IMAGES_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NEWS_LETTERS_IMAGES_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const getNewsLettersTexts = lang => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_NEWS_LETTERS_TEXTS_REQUEST });

    const { data } = await axios.get(createURL(lang));

    dispatch({
      type: actionTypes.GET_NEWS_LETTERS_TEXTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NEWS_LETTERS_TEXTS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
