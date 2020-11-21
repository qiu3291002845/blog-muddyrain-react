import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import BasicRoute from "./router/router";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <BasicRoute />
        </div>
      </Provider>
    );
  }
}

export default App;
