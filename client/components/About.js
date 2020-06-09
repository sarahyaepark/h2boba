import React from "react";
import { NavLink } from "react-router-dom";
import { Spacer } from "../components";
import aqua9Logo from "../../public/images/aqua9_logo.png";
import milkTea from "../../public/images/milkTea.png";

export const About = () => {
  return (
    <div>
      <img src={aqua9Logo} alt="aqua 9 plus" width="150px" height="40px" />
      <h1>Feel The Difference. Make a Difference.</h1>
      <img
        src="https://www.pinclipart.com/picdir/big/56-560926_transparent-background-cartoon-ice-cube-png-clipart.png"
        alt="aqua9plus"
        width="300px"
        height="300px"
      />
      <img
        src="https://cdn1.iconfinder.com/data/icons/cartoon-bubble-ui/100/Arrow_-_Right-512.png"
        alt="aqua9plus"
        width="150px"
        height="150px"
      />
      <img src={milkTea} alt="milk tea" />
    </div>
  );
};
