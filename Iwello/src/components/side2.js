import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
export default function side2() {
  return (
    <div className="side2">
      <Link to="../Signin">
        <p className="signIn">Sign In</p>
      </Link>
      <p className="getStarted">Get Started</p>
      <div className="cont">
        <p className="par1">
          iWello connects users to medical professionals for as low as N100 per
          consultation.{" "}
        </p>
        <p className="par2">
          The app also allows you see available medical supplies at your local
          Pharmacy or Chemist.
        </p>
      </div>
      <Link to="../User">
        <div className="sign-box">
          <p className="sign-txt">sign up</p>
        </div>
      </Link>

      <p className="reg">
        Already registered?
        <Link to="../Signin">
          <span className="blue">Sign in.</span>
        </Link>
      </p>
      <p className="learn">Learn More</p>
      <div className="line2"></div>
    </div>
  );
}
