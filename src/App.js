import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./page/Home";
const App = () => (
  <Provider store={store}>
    <div className="app">
      <Home />
    </div>
  </Provider>
);

export default App;
