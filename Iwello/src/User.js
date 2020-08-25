import React from "react";
import "./styles.css";
import Side1 from "./components/side1";
import { FaCaretDown } from "react-icons/fa";
import Google from "./pictures/google.png";
import { Link } from "react-router-dom";
import Foot from "./components/foot.js";
export default function User() {
  return (
    <div className="App">
      <Side1 />
      <Link to="/Signin">
        <p className="signIn">Sign In</p>
      </Link>
      <Link to="/User">
        <div className="UserButton  ">
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
        <div className="Medical-labButton ">
          <p className="Medical-labText">Medical lab</p>
        </div>
      </Link>
      <p className="user-sign-up">User Sign up</p>
      <input className="UserName user-userName" placeholder="Full name*" />
      <input className="UserName user-e-mail" placeholder="e-mail*" />
      <input className="UserName user-phone" placeholder="Phone no*" />
      <input
        className="UserName user-language"
        placeholder="select your preferred language*"
      />
      <div className="down">
        <FaCaretDown />
      </div>
      <div className="User-google-box ">
        <img className="google-icon" src={Google} alt="icon" />
        <p className="user-Log-in-google ">sign up with google</p>
      </div>
      <div className="sign-box sign-in-user">
        <p className="sign-txt ">sign up</p>
      </div>
      <Foot />
    </div>
  );
}
