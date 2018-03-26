/* eslint-disable import/prefer-default-export */
import {
  REQUEST_LIST_DATA,
  RECEIVE_LIST_DATA,
  FAILED_TO_RECEIVE_LIST_DATA
} from "../actions/list-actions";

export default function posts(
  state = { isFetching: false, data: [], errorMessage: "" },
  action
) {
  switch (action.type) {
    case REQUEST_LIST_DATA:
      return { ...state, isFetching: true };
    case FAILED_TO_RECEIVE_LIST_DATA:
      return { ...state, isFetching: false, errorMessage: action.message };
    case RECEIVE_LIST_DATA: {
      return { ...state, isFetching: false, data: action.data };
    }
    default:
      return state;
  }
}
