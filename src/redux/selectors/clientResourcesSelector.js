import { createSelector } from 'reselect';

const clientResourcesSelector = state => state.clientResources;

export const resourcesSelector = createSelector(
  clientResourcesSelector,
  ({ clientResources }) =>
    clientResources.sort((a, b) => (a.content < b.content ? -1 : a.content > b.content ? 1 : 0))
);

export const loadingSelector = createSelector(
  clientResourcesSelector,
  ({ loading }) => loading
);

export const errorSelector = createSelector(
  clientResourcesSelector,
  ({ error }) => error
);
