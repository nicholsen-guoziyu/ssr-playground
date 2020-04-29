import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/ssr-saga-store";
import Layout from "./components/Layout";
import Hello from "./components/Hello";
import PostSaga from "./components/PostSaga";

import App from "./components/App";


const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState);

  ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);