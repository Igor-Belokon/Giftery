import { Component } from "react";
import "./style.css";
import { Loading } from "./loading";
import Login from "./login";
import { StorePage } from "../components/main-page/gift-store-page";

import { Switch, Route, Redirect } from "react-router-dom";

export default class MainPage extends Component {
  render() {
    return (
      <div
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Switch>
          <Route exact path="/load">
            <Loading></Loading>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/store">
            <StorePage></StorePage>{" "}
          </Route>
          <Route path="/">
            <Redirect to="/load" />
          </Route>
        </Switch>
      </div>
    );
  }
}
