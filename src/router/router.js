import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../page/Home";
import User from "../page/User/user";
import Classify from "../page/Classify/classify";
import UserEdit from "../page/User/components/edit";
class BasicRoute extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <Route path="/">
              <Home>
                <Route exact path="/" component={User} />
                <Route exact path="/classify" component={Classify} />
                <Route exact path="/userEdit" component={UserEdit} />
                <Route exact path="/userEdit/:id" component={UserEdit} />
              </Home>
            </Route>
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default BasicRoute;
