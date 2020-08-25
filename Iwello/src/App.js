import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./landing";
import Signin from "./signin";
import User from "./User";
import Doctor from "./doctor";
import Medical from "./MedicalLab";
import Pharma from "./pharma";
import Chemist from "./chemist";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/User" component={User} />
        <Route exact path="/Doctor" component={Doctor} />
        <Route exact path="/Medical" component={Medical} />
        <Route exact path="/pharma" component={Pharma} />
        <Route exact path="/chemist" component={Chemist} />
      </Switch>
    </div>
  );
}
