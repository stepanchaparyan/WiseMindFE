import { createSelector } from 'reselect';

const navbarSentRequestSelector = state => state.navbar;

export const sentRequestSelector = createSelector(
  navbarSentRequestSelector,
  navbar => navbar.navbar.find(item => item.num === 0)
);

export const navbarMenusSelector = createSelector(
  navbarSentRequestSelector,
  navbar =>
    navbar.navbar
      ?.filter(item => item.num !== 0)
      .sort((a, b) => (a.num < b.num ? -1 : a.num > b.num ? 1 : 0))
);

export const loadingSelector = createSelector(
  navbarSentRequestSelector,
  navbar => navbar.loading
);
