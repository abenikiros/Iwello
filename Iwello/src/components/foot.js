import React from "react";
import "../styles.css";

export default function Foot() {
  return (
    <div className="foot">
      <span className="icons">
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
      </span>
      <p className="date">© 2020 iWello </p>
    </div>
  );
}
