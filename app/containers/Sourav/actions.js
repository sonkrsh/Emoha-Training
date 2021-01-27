/*
 *
 * Sourav actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export function formValueSubmit(formvalue) {
  return {
    type: DEFAULT_ACTION,
    formvalue,
  };
}
