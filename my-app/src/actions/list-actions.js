// https://engineering.thetrainline.com/handling-api-calls-in-redux-with-redux-api-middleware-c95c38816e13
// the structure of the reducers follows the example from the react-redux documentation:
// http://redux.js.org/docs/advanced/AsyncActions.html
import fetch from "isomorphic-fetch";

export const REQUEST_LIST_DATA = "REQUEST_LIST_DATA";
export const RECEIVE_LIST_DATA = "RECEIVE_LIST_DATA";
export const FAILED_TO_RECEIVE_LIST_DATA = "FAILED_TO_RECEIVE_LIST_DATA";

export function requestListData() {
  return { type: REQUEST_LIST_DATA };
}

export function receiveListData(data) {
  return {
    type: RECEIVE_LIST_DATA,
    data
  };
}

export function failedToReceiveListData(message) {
  return {
    type: FAILED_TO_RECEIVE_LIST_DATA,
    message
  };
}
//  https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
export function fetchListData() {
  return function dispatcher(dispatch) {
    dispatch(requestListData());
    // eslint-disable-next-line
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        if (response.status >= 400) {
          dispatch(failedToReceiveListData("Bad response from server"));
        }
        return response.json();
      })
      .then(json => {
        dispatch(receiveListData(json));
      });
  };
}
