import React from "react";
import "./styles.css";
import Side1 from "./components/side1";

import Side2 from "./components/side2";
import Foot from "./components/foot.js";
export default function Landing() {
  return (
    <div className="App">
      <Side1 />
      <Side2 />
      <Foot />
    </div>
  );
}
