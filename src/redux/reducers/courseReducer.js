import * as types from "../actions/actionTypes";
// This is called the coursereducer it updates state acc to the type of the action
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, action.payload];
    default:
      return state;
  }
}
