import { createSelector } from 'reselect';

const homeImagesSelector = state => state.homeImages;

export const welcomeImagesSelector = createSelector(
  homeImagesSelector,
  ({ homeImages }) => homeImages?.filter(item => item.parent_section === 'welcome')
);

export const coreValuesMainImageSelector = createSelector(
  homeImagesSelector,
  ({ homeImages }) => homeImages?.find(item => item.parent_section === 'coreValuesMain')
);

export const coreValuesImagesSelector = createSelector(
  homeImagesSelector,
  ({ homeImages }) =>
    homeImages
      ?.filter(item => item.parent_section === 'coreValues')
      .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0))
);

export const employeesImagesSelector = createSelector(
  homeImagesSelector,
  ({ homeImages }) =>
    homeImages
      ?.filter(item => item.parent_section === 'all_employee')
      .sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0))
);
