/*
 *
 * Sourav reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  data: '',
};

/* eslint-disable default-case, no-param-reassign */
const souravReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.data = action.formvalue;
        break;
    }
  });

export default souravReducer;
