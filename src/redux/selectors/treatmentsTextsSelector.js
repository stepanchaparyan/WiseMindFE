import { createSelector } from 'reselect';

const treatmentsTextsSelector = state => state.treatmentsTexts;

export const loadingSelector = createSelector(
  treatmentsTextsSelector,
  ({ loading }) => loading
);

export const errorSelector = createSelector(
  treatmentsTextsSelector,
  ({ error }) => error
);

export const allTreatmentsTextsSelector = createSelector(
  treatmentsTextsSelector,
  ({ treatmentsTexts }) =>
    treatmentsTexts.sort((a, b) => (a.position < b.position ? -1 : a.position > b.position ? 1 : 0))
);

export const individualPsychotherapySelector = createSelector(
  treatmentsTextsSelector,
  ({ treatmentsTexts }) => treatmentsTexts.find(item => item.title === 'Individual Psychotherapy')
);

export const groupTherapySelector = createSelector(
  treatmentsTextsSelector,
  ({ treatmentsTexts }) =>
    treatmentsTexts.filter(item => item.section === 'treatments_group_therapy')
);

export const parentingSkillsSelector = createSelector(
  treatmentsTextsSelector,
  ({ treatmentsTexts }) =>
    treatmentsTexts.filter(item => item.section === 'treatments_parenting_skills')
);
