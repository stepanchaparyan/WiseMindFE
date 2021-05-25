import { createSelector } from 'reselect';

const newsLettersImagesSelector = state => state.newsLettersImages;

export const imagesLoadingSelector = createSelector(
  newsLettersImagesSelector,
  ({ loading }) => loading
);

export const imagesErrorSelector = createSelector(
  newsLettersImagesSelector,
  ({ error }) => error
);

export const newsImagesSelector = createSelector(
  newsLettersImagesSelector,
  ({ newsLettersImages }) => newsLettersImages
);

const newsLettersTextsSelector = state => state.newsLettersTexts;

export const textsLoadingSelector = createSelector(
  newsLettersTextsSelector,
  ({ loading }) => loading
);

export const textsErrorSelector = createSelector(
  newsLettersTextsSelector,
  ({ error }) => error
);

export const newsTextsSelector = createSelector(
  newsLettersTextsSelector,
  ({ newsLettersTexts }) => newsLettersTexts
);
