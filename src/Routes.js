import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddBillForm from "./components/AddBillForm";
import EditBillForm from "./components/EditBillForm";
import Home from "./components/Home";
const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route exact path={"/add-bill"} component={AddBillForm}></Route>
          <Route exact path={"/edit-bill/:id"} component={EditBillForm}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
