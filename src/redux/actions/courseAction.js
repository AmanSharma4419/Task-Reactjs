import * as types from "../actions/actionTypes";
// This is called actionCreater it return the action with type and payload key with data
export function createCourse(course) {
  console.log(course);
  return { type: types.CREATE_COURSE, payload: course };
}

// This action is to hit the api endpoint in the redux including the thunk
export function loadCourses() {
  return function (dispatch) {
    // 1 return fetch logic which has to be handled in the seperate file
    // 2 After getting the data from the api enpoint dispatch the another action with the type and payload(Returned data by the api endpoint) to update the reducer function
  };
}
