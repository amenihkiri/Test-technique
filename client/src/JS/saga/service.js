import axios from "axios";
import { BaseApi } from "../constants/actions-types";

//get instructors
export const getInstructors = async () => {
  const result = await axios.get(`${BaseApi}/instructors`);
  console.log("result.data", result.data);
  return result.data;
};

//add instructor
export const addInstructor = async (newInstructor) => {
  const result = await axios.post(`${BaseApi}/instructors`, newInstructor);
  return result.data;
};

//delete instructor
export const deleteInstructor = async (id) => {
  const result = await axios.delete(`${BaseApi}/instructors/${id}`);
  return result.data;
};

// edit instructor
export const editInstructor = async (id, updatedInstructor) => {
  const result = await axios.put(
    `${BaseApi}/instructors/${id}`,
    updatedInstructor
  );
  return result.data;
};
