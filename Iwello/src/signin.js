import React from "react";
import "./styles.css";
import Side1 from "./components/side1";
import Foot from "./components/foot.js";
import Google from "./pictures/google.png";
import { FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div className="side1">
      <Side1 />
      <Link to="/User">
        <p className="signUp">Sign Up</p>
      </Link>

      <p className="signIn-Txt">Sign In</p>
      <input className="UserName" placeholder="E-mail/Username" />
      <input className="Password" placeholder="passWord" />
      <div className="Lock">
        <FaUnlockAlt />
      </div>
      <div className="sign-box sign-in-box">
        <p className="sign-txt ">sign in</p>
      </div>
      <div className="google-box">
        <img className="google-icon" src={Google} alt="icon" />
        <p className="Log-in-google">Login with google</p>
      </div>
      <p className="reg reg-2">
        Not registered yet?,{" "}
        <Link to="/User">
          <span className="blue"> Sign up.</span>
        </Link>
      </p>
      <div className="learn-container">
        <p className="learn">Learn More</p>
        <div className="line2"></div>
      </div>

      <Foot />
    </div>
  );
}
