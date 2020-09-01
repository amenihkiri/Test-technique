import * as CONSTANTS from "../constants/actions-types";

export function getInstructors(payload) {
  return {
    type: CONSTANTS.GET_INSTRUCTORS_REQUEST,
    payload,
  };
}
export function addInstructor(newInstructor) {
  return {
    type: CONSTANTS.ADD_INSTRUCTOR_REQUEST,
    newInstructor,
  };
}
export function deleteInstructor(id) {
  return {
    type: CONSTANTS.DELETE_INSTRUCTOR_REQUEST,
    id,
  };
}
export function editInstructor(id, updatedInstructor) {
  return {
    type: CONSTANTS.EDIT_INSTRUCTOR_REQUEST,
    id,
    updatedInstructor,
  };
}
