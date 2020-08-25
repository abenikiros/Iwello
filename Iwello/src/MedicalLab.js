import React from "react";
import "./styles.css";
import Side1 from "./components/side1";
import { Link } from "react-router-dom";
import Google from "./pictures/google.png";
import Foot from "./components/foot.js";
export default function Medical() {
  return (
    <div className="App">
      <Side1 />
      <Link to="/Signin">
        <p className="signIn">Sign In</p>
      </Link>
      <Link to="/User">
        <div className="UserButton UserButton-p ">
          <p className="UserText">User</p>
        </div>
      </Link>
      <Link to="/Doctor">
        <div className="DoctorButton ">
          <p className="DoctorText">Doctor</p>
        </div>
      </Link>
      <Link to="/Chemist">
        <div className="ChemistButton ">
          <p className="ChemistText">Chemist</p>
        </div>
      </Link>
      <Link to="/Pharma">
        <div className="PharmacyButton  ">
          <p className="PharmacyText">Pharmacy</p>
        </div>
      </Link>
      <Link to="/Medical">
        <div className="Medical-labButton DoctorButton-M">
          <p className="Medical-labText">Medical lab</p>
        </div>
      </Link>
      <p className="Medica-lab-sign-up">Medical lab Sign up</p>
      <input className="UserName Lab-userName" placeholder="Full name*" />
      <input className="UserName Lab-e-mail" placeholder="e-mail*" />
      <input className="UserName Lab-Phone" placeholder="Phone no*" />
      <input className="UserName Lab-Location" placeholder="Location*" />
      <div className="Lab-google-box ">
        <img className="google-icon" src={Google} alt="icon" />
        <p className="user-Log-in-google ">sign up with google</p>
      </div>
      <div className="sign-box sign-in-Lab">
        <p className="sign-txt ">sign up</p>
      </div>
      <Foot />
    </div>
  );
}
