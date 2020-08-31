import { takeEvery, put, all, call } from "redux-saga/effects";
import * as api from "../saga/service";
import * as CONSTANTS from "../constants/actions-types";

//GET
export function* getInstructors() {
  try {
    const data = yield call(api.getInstructors);
    console.log("data", data);
    yield put({
      type: CONSTANTS.GET_INSTRUCTORS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({ type: CONSTANTS.GET_INSTRUCTORS_FAILURE, error });
  }
}
//ADD
export function* addInstructor(action) {
  try {
    const data = yield call(() => api.addInstructor(action.newInstructor));
    yield put({
      type: CONSTANTS.ADD_INSTRUCTOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({ type: CONSTANTS.ADD_INSTRUCTOR_FAILURE, error });
  }
}
//DELETE
export function* deleteInstructor(action) {
  try {
    yield call(() => api.deleteInstructor(action.id));
    yield put({
      type: CONSTANTS.DELETE_INSTRUCTOR_SUCCESS,
      payload: action.id,
    });
  } catch (error) {
    yield put({ type: CONSTANTS.DELETE_INSTRUCTOR_FAILURE, error });
  }
}
//UPDATE
export function* editInstructor(action) {
  try {
    const data = yield call(() =>
      api.editInstructor(action.id, action.updatedInstructor)
    );
    yield put({
      type: CONSTANTS.EDIT_INSTRUCTOR_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: CONSTANTS.EDIT_INSTRUCTOR_FAILURE, e });
  }
}

//Watchers
export function* getInstructorsWatcher() {
  yield takeEvery(CONSTANTS.GET_INSTRUCTORS_REQUEST, getInstructors);
}
export function* addInstructorWatcher() {
  yield takeEvery(CONSTANTS.ADD_INSTRUCTOR_REQUEST, addInstructor);
}
export function* deleteInstructorWatcher() {
  yield takeEvery(CONSTANTS.DELETE_INSTRUCTOR_REQUEST, deleteInstructor);
}
export function* editInstructorWatcher() {
  yield takeEvery(CONSTANTS.EDIT_INSTRUCTOR_REQUEST, editInstructor);
}
//
export default function* rootSaga() {
  yield all([
    getInstructorsWatcher(),
    addInstructorWatcher(),
    deleteInstructorWatcher(),
    editInstructorWatcher(),
  ]);
}
