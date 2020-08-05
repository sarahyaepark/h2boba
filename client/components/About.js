import React from "react";
import { NavLink } from "react-router-dom";
import { Spacer } from "../components";
import aqua9Logo from "../../public/images/aqua9_logo.png";
import milkTea from "../../public/images/milkTea.png";
import inStore from "../../public/images/instore.jpg";

export const About = () => {
  return (
    <div>
      {/* <img src={aqua9Logo} alt="aqua 9 plus" width="150px" height="40px" /> */}
      <div className="aboutSection">
        <img
          className="inStorePic"
          src="https://s3-media0.fl.yelpcdn.com/bphoto/Tsl3YK7NE-YLeyb1GScrfQ/o.jpg"
          alt="in store"
          width="350px"
          height="500px"
        />
        <div className="textContainer">
          <h1 className="parteaText">Let's Partea!</h1>
          <h3 className="aboutText">
            At H2bOba, we use only premium{" "}
            <a href="http://aquanineplus.com/" target="_blank">
              <span className="links">Aqua 9+</span>
            </a>{" "}
            alkaline water as the base to all our yummy drinks. We also use
            fresh frozen fruit to flavor our refreshing smoothies! Family owned
            and locally operated, we can't wait to get bubbly together and find
            the drink that's your perfect match-a! Come through to partea!
          </h3>
          <h3 className="aboutText">
            Always and especially during the COVID-19 pandemic, we always put
            your health and safety as our first priority. Face masks are
            required for entry!
          </h3>
        </div>
      </div>
    </div>
  );
};
