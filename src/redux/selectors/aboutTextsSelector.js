import { createSelector } from 'reselect';

const aboutTextsSelector = state => state.aboutTexts;

export const loadingSelector = createSelector(
  aboutTextsSelector,
  ({ loading }) => loading
);

export const errorSelector = createSelector(
  aboutTextsSelector,
  ({ error }) => error
);

export const allTextsSelector = createSelector(
  aboutTextsSelector,
  ({ aboutTexts }) =>
    aboutTexts?.sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0))
);
