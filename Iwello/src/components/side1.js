import React from "react";
import "../styles.css";
import logo from "../pictures/logo.png";
import doc from "../pictures/doc.png";
import { Link } from "react-router-dom";
export default function Side1() {
  return (
    <div className="side1">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <p className="med">Medical consultations for as low as N100.</p>
      <div className="line"></div>
      <img src={doc} className="docImg" alt="doctor" />
    </div>
  );
}
