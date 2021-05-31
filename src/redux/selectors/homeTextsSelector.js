import { createSelector } from 'reselect';

const homeTextsSelector = state => state.homeTexts;

export const loadingSelector = createSelector(
  homeTextsSelector,
  ({ loading }) => loading
);

export const errorSelector = createSelector(
  homeTextsSelector,
  ({ error }) => error
);

export const welcomeTextsSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) => homeTexts?.filter(item => item.section === 'welcome')
);

export const shortTextSelector = createSelector(
  welcomeTextsSelector,
  welcomeTexts => welcomeTexts?.find(text => text.title === 'shortText')
);

export const appFullNameSelector = createSelector(
  welcomeTextsSelector,
  welcomeTexts => welcomeTexts?.find(text => text.title === 'appFullName')
);

export const longTextSelector = createSelector(
  welcomeTextsSelector,
  welcomeTexts => welcomeTexts?.find(text => text.title === 'longText')
);

export const readMoreTextSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) => homeTexts?.find(item => item.title === 'readMore')
);

export const readLessTextsSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) => homeTexts?.find(item => item.title === 'readLess')
);

export const coreValueMainTextSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) => homeTexts?.find(item => item.section === 'coreValuesMain')
);

export const treatmentsSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) =>
    homeTexts
      ?.filter(item => item.parent_section === 'treatment')
      .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0))
);

export const coreValuesTextsSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) =>
    homeTexts
      ?.filter(item => item.parent_section === 'coreValues')
      .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0))
);

export const whoWeAreTextSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) => homeTexts?.find(item => item.section === 'whoWeAre')
);

export const employeesTextsSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) =>
    homeTexts
      ?.filter(item => item.parent_section === 'all_employee')
      .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0))
);

export const employeesTitleTextSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) => homeTexts?.find(item => item.section === 'employeesTitleText')
);

export const whoWeAreButtonTextSelector = createSelector(
  homeTextsSelector,
  ({ homeTexts }) =>
    homeTexts?.find(item => item.section === 'whoWeAre' && item.title === 'whoWeAreButtonText')
);
