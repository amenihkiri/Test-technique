import * as CONSTANTS from "../constants/actions-types";
import produce from "immer";

const initialState = {
  instructors: [],
  local: { instructorsLoading: false, instructorsError: false },
};

const InstructorReducer = (state = initialState, action) => {
  const nextState = produce(state, (draft) => {
    switch (action.type) {
      case CONSTANTS.GET_INSTRUCTORS_REQUEST:
      case CONSTANTS.ADD_INSTRUCTOR_REQUEST:
      case CONSTANTS.DELETE_INSTRUCTOR_REQUEST:
      case CONSTANTS.EDIT_INSTRUCTOR_REQUEST:
        draft.local.instructorsLoading = true;
        return;

      case CONSTANTS.GET_INSTRUCTORS_SUCCESS:
        // case CONSTANTS.ADD_INSTRUCTOR_SUCCESS:
        // case CONSTANTS.DELETE_INSTRUCTOR_SUCCESS:
        // case CONSTANTS.EDIT_INSTRUCTOR_SUCCESS:
        draft.instructors = action.payload;
        draft.local.instructorsLoading = false;
        return;

      case CONSTANTS.GET_INSTRUCTORS_FAILURE:
      case CONSTANTS.ADD_INSTRUCTOR_FAILURE:
      case CONSTANTS.DELETE_INSTRUCTOR_FAILURE:
      case CONSTANTS.EDIT_INSTRUCTOR_FAILURE:
        draft.loacal.instructorsLoading = false;
        draft.loacal.instructorsError = true;
        break;
      default:
        return draft;
    }
  });
  return nextState;
};
export default InstructorReducer;

// import * as CONSTANTS from "../constants/actions-types";
// import produce from "immer";

// const initialState = {
//   loading: false,
//   error: false,
//   instructors: [],
// };

// const InstructorReducer = (state = initialState, action) => {
//   produce(state, (draft) => {
//     switch (action.type) {
//       case CONSTANTS.GET_INSTRUCTORS_REQUEST:
//         draft.loading = true;
//         break;

//       case CONSTANTS.GET_INSTRUCTORS_SUCCESS:
//         draft.instructors = action.payload;
//         draft.loading = false;
//         break;

//       case CONSTANTS.GET_INSTRUCTORS_FAILURE:
//         draft.error = true;
//         break;

//       default:
//         return draft;
//     }
//   });
// };
// export default InstructorReducer;

// import { GET_INSTRUCTORS } from "../constants/actions-types";

// const initialState = {
//   instructors: [],
// };

// const InstructorReducer = (state = initialState, action) => {

//   switch (action.type) {
//     case GET_INSTRUCTORS:
//       return { ...state, instructors: action.payload };
//     default:
//       return state;
//   }

// };
// export default InstructorReducer;
