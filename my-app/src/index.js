import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/";
import "./index.css";
import App from "./components/app/";
import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
registerServiceWorker();
