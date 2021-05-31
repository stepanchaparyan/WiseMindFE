import { createSelector } from 'reselect';

const clientResourcesSelector = state => state.clientResources;

export const resourcesSelector = createSelector(
  clientResourcesSelector,
  ({ clientResources }) => clientResources
);

export const loadingSelector = createSelector(
  clientResourcesSelector,
  ({ loading }) => loading
);

export const errorSelector = createSelector(
  clientResourcesSelector,
  ({ error }) => error
);
