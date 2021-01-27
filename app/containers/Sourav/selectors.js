import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sourav state domain
 */

const selectSouravDomain = state => state.sourav || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Sourav
 */

const makeSelectSourav = () =>
  createSelector(
    selectSouravDomain,
    substate => substate,
  );

export default makeSelectSourav;
export { selectSouravDomain };
