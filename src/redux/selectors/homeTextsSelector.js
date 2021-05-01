import { createSelector } from 'reselect';

const homeTextsSelector = state => state.homeTexts;

export const welcomeTextsSelector = createSelector(
  homeTextsSelector,
  homeTexts => homeTexts.homeTexts?.filter(item => item.section === 'welcome')
);

export const loadingSelector = createSelector(
  homeTextsSelector,
  homeTexts => homeTexts.loading
);
