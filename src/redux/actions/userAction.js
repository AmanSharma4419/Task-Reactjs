import * as types from "./actionTypes";
// This is called actionCreater it return the action with type and payload key with data
export function createUser(user) {
  console.log(user);
  return { type: types.CREATE_USER, payload: user };
}

export function loginUser(user) {
  console.log(user);
  return {
    type: types.LOGIN_USER,
    payload: user,
  };
}
