import React from "react";
import { NavLink } from "react-router-dom";
import bobahhh from "../../public/images/bobahhh.png";
import aqua9Logo from "../../public/images/aqua9_logo.png";
import bobaBackground from "../../public/images/boba_background.jpg";

import { Spacer } from "../components";

export const Homepage = (props) => {
  return (
    <div>
      {/* <!-- See navbar.js for reference of what will show up above --> */}
      <div className="sayBobahhh">
        <div className="parentImg">
          <img id="bobaBg" src={bobaBackground} alt="boba" />
          <img
            id="bobahhhImg"
            src={bobahhh}
            alt="say bob-ahhh"
            width="800px"
            height="300px"
          />
        </div>
        <br />
        <img src={aqua9Logo} alt="aqua9plus" width="120px" height="40px" />
        <Spacer />
      </div>
      <div className="categories">
        <div className="blendCategory">
          <NavLink to="/blends">
            <div>
              <h3>Blendz</h3>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQJEqz8-PmH8bOM8jOWwBKFsHLCZLY-JbqmU8NxWlrBG-p38n1&usqp=CAU"
                alt="blends"
              />
            </div>
          </NavLink>
        </div>
        <div className="teaCategory">
          <NavLink to="/teas">
            <div>
              <h3>Teaz</h3>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQJEqz8-PmH8bOM8jOWwBKFsHLCZLY-JbqmU8NxWlrBG-p38n1&usqp=CAU"
                alt="teas"
              />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
