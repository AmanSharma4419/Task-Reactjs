import * as types from "../actions/actionTypes";
import { initialState } from "../initialState";

export default function loginReducer(
  state = initialState.loginUserCredetials,
  action
) {
  switch (action.type) {
    case types.LOGIN_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
