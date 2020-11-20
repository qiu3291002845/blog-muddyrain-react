import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import BasicRoute from "./router/router";
import "bootstrap/dist/css/bootstrap.css";
const App = () => (
  <Provider store={store}>
    <div className="app">
      <BasicRoute />
    </div>
  </Provider>
);

export default App;
