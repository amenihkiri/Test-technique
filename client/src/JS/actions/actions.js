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
// import axios from "axios";
// import { GET_INSTRUCTORS } from "../constants/actions-types";

// //get instructors
// export const getInstructors = () => (dispatch) => {
//   axios
//     .get("/instructors")
//     .then((res) => dispatch({ type: GET_INSTRUCTORS, payload: res.data }))
//     .catch((err) => console.log(err));
// };

// //add instructor
// export const addInstructor = (newInstructor) => (dispatch) => {
//   axios
//     .post("/instructors", newInstructor)
//     .then((res) => dispatch(getInstructors()))
//     .catch((err) => console.log(err));
// };
// //delete instructor
// export const deleteInstructor = (id) => (dispatch) => {
//   axios
//     .delete(`/instructors/${id}`)
//     .then((res) => dispatch(getInstructors()))
//     .catch((err) => console.log(err));
// };

// // edit instructor
// export const editInstructor = (id, updatedInstructor) => (dispatch) => {
//   axios
//     .put(`/instructors/${id}`, updatedInstructor)
//     .then((res) => dispatch(getInstructors()))
//     .catch((err) => console.log(err));
// };
