import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";

import ListUsers from "../pages/ListUsers";
import CreateUsers from "../pages/CreateUsers";
import UpdateUsers from "../pages/UpdateUsers";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/users" exact component={ListUsers} isPrivate />
      <Route path="/create" exact component={CreateUsers} isPrivate />
      <Route path="/update/:id" exact component={UpdateUsers} isPrivate />
    </Switch>
  );
}
