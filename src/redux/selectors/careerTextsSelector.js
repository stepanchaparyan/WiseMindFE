import { createSelector } from 'reselect';

const careerTextsSelector = state => state.careerTexts;

export const loadingSelector = createSelector(
  careerTextsSelector,
  ({ loading }) => loading
);

export const errorSelector = createSelector(
  careerTextsSelector,
  ({ error }) => error
);

export const allTextsSelector = createSelector(
  careerTextsSelector,
  ({ careerTexts }) => careerTexts
);
