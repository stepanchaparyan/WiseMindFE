import * as actionTypes from '../constants/constants';

export const newsLettersImagesReducer = (
  state = { newsLettersImages: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_NEWS_LETTERS_IMAGES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_NEWS_LETTERS_IMAGES_SUCCESS:
      return {
        newsLettersImages: payload,
        loading: false
      };
    case actionTypes.GET_NEWS_LETTERS_IMAGES_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export const newsLettersTextsReducer = (
  state = { newsLettersTexts: [], loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_NEWS_LETTERS_TEXTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_NEWS_LETTERS_TEXTS_SUCCESS:
      return {
        newsLettersTexts: payload,
        loading: false
      };
    case actionTypes.GET_NEWS_LETTERS_TEXTS_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
