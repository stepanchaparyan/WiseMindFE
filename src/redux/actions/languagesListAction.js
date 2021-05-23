import * as actionTypes from '../constants/constants';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';

export const getLanguagesList = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_LANGUAGES_LIST_REQUEST });

    const { data } = await axios.get(`${BASE_URL}/languages`);

    dispatch({
      type: actionTypes.GET_LANGUAGES_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_LANGUAGES_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
