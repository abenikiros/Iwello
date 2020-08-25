import React from "react";
import "./styles.css";
import Side1 from "./components/side1";
import { FaCaretDown } from "react-icons/fa";
import Google from "./pictures/google.png";
import Foot from "./components/foot.js";
import { Link } from "react-router-dom";
export default function Doctor() {
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
        <div className="DoctorButton DoctorButton-M">
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
        <div className="Medical-labButton">
          <p className="Medical-labText">Medical lab</p>
        </div>
      </Link>
      <p className="doctor-sign-up">Doctor Sign up</p>
      <input className="UserName user-userName" placeholder="Full name*" />
      <input className="UserName user-e-mail" placeholder="e-mail*" />
      <input className="Doctor-years" placeholder="yrs since housemanship*" />
      <input className="UserName doctor-phone" placeholder="Phone no*" />
      <input className="UserName user-language" placeholder="Specialty" />
      <div className="down">
        <FaCaretDown />
      </div>
      <input
        className="UserName doctor-location"
        placeholder="Hospital Name and location*"
      />
      <div className="Doctor-google-box ">
        <img className="google-icon" src={Google} alt="icon" />
        <p className="user-Log-in-google ">sign up with google</p>
      </div>
      <div className="sign-box sign-in-Doctor">
        <p className="sign-txt ">sign up</p>
      </div>

      <Foot />
    </div>
  );
}
