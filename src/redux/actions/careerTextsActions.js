import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

const createURL = lang => {
  return `${BASE_URL}/${lang}/career/texts`;
};

export const getCareerTexts = lang => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_CAREER_TEXTS_REQUEST });

    const { data } = await axios.get(createURL(lang));
    console.log(data);
    dispatch({
      type: actionTypes.GET_CAREER_TEXTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CAREER_TEXTS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
