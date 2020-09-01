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
        break;

      case CONSTANTS.GET_INSTRUCTORS_SUCCESS:
        draft.instructors = action.payload;
        draft.local.instructorsLoading = false;
        break;

      case CONSTANTS.ADD_INSTRUCTOR_SUCCESS:
        draft.instructors.push(action.payload);
        break;

      case CONSTANTS.DELETE_INSTRUCTOR_SUCCESS:
        draft.instructors = draft.instructors.filter(
          (el) => el._id !== action.payload
        );
        break;

      case CONSTANTS.EDIT_INSTRUCTOR_SUCCESS:
        draft.instructors = draft.instructors.map((el) =>
          el._id === action.payload._id ? action.payload : el
        );
        break;

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
