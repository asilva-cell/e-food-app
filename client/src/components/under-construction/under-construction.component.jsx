import React from "react";

import { ReactComponent as Construction } from "../../assets/construction.svg";
import "./under-construcion.style.scss"

const UnderConstruction = () => (
  <div className="construction">
    <Construction />
    <span>Under Construction </span>
  </div>
);

export default UnderConstruction;
