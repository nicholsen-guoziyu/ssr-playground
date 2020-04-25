import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import sagastore from "./store/saga-index";
import App from "./components/App";

render(
  <Provider store={sagastore}>
    <App />
  </Provider>,
  document.getElementById("app")
);