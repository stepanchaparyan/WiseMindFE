import { createSelector } from 'reselect';

const languagesListSelector = state => state.languagesList;

export const languagesSelector = createSelector(
  languagesListSelector,
  ({ languagesList }) => languagesList
);

export const loadingSelector = createSelector(
  languagesListSelector,
  ({ loading }) => loading
);

export const errorSelector = createSelector(
  languagesListSelector,
  ({ error }) => error
);
