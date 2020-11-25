import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";

import allReducer from "./reducers/index";

const middleware = [thunk];

const store = createStore(allReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
