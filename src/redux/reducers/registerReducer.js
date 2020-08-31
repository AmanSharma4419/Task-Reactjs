import * as types from "../actions/actionTypes";
import { initialState } from "../initialState";

export default function registerReducer(
  state = initialState.registredUserCredetials,
  action
) {
  switch (action.type) {
    case types.CREATE_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
