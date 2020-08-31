import { GET_INSTRUCTORS } from "../constants/actions-types";
// import produce from "immer";

const initialState = {
  instructors: [],
};

const InstructorReducer = (state = initialState, action) => {
  // produce(state,draft => {
  switch (action.type) {
    case GET_INSTRUCTORS:
      return { ...state, instructors: action.payload };
    default:
      return state;
  }
  // })
};
export default InstructorReducer;
