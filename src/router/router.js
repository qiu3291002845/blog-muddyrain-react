import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../page/Home";
import User from "../page/User/user";
import Classify from "../page/Classify/classify";
import UserEdit from "../page/User/components/edit";
import Label from "../page/Label/label";
import Article from "../page/Articles/article";

import Login from "../page/Login/login";
import "./router.scss";
class BasicRoute extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home>
                <Switch>
                  <Route path="/home/user" component={User} />
                  <Route path="/home/classify" component={Classify} />
                  <Route path="/home/label" component={Label} />
                  <Route path="/home/article" component={Article} />

                  <Route path="/home/userEdit/:id" component={UserEdit} />
                  <Redirect exact to="/home" from="/" />
                </Switch>
              </Home>
            </Route>
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default BasicRoute;
