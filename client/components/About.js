import React from "react";
import { NavLink } from "react-router-dom";
import { Spacer } from "../components";

export const About = () => {
  return (
    <div>
      <br />
      <br />
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
          <h1 className="parteaText">
            Let's Partea!{" "}
            <span role="img" aria-label="party popper">
              🎉
            </span>
          </h1>

          <h3 className="aboutText">
            At H2bOba, we use only premium{" "}
            <a href="http://aquanineplus.com/" target="_blank">
              <span className="links">Aqua 9+</span>
            </a>{" "}
            alkaline water as the base to all our yummy drinks. We also use
            fresh frozen fruit to flavor our refreshing smoothies!{" "}
            <span role="img" aria-label="fruits">
              🍓🍈🍑🍉
            </span>{" "}
            Family owned and locally operated, we can't wait for you to find the
            drink that's your perfect match-a! Come through to partea!
          </h3>
          <h3 className="aboutText">
            Always and especially during the COVID-19 pandemic, we always put
            your health and safety as our first priority. Face masks are
            required for entry!
          </h3>
        </div>
      </div>
      <br />
      <br />
      <div className="bobaSection">
        <div className="bobaContainer">
          <h1 className="parteaText">
            Feelin Bubbly?{" "}
            <span role="img" aria-label="sad face">
              ✨
            </span>{" "}
          </h1>
          <h3 className="bobaText">
            We know that feeling of having a great drink ruined by some mushy
            boba bubbles!{" "}
            <span role="img" aria-label="sad face">
              😞
            </span>{" "}
            <br /> That's why we always make our boba in small batches so you
            know you're getting the chewiest and yummiest end product!{" "}
            <span role="img" aria-label="sparkle">
              🌟
            </span>{" "}
          </h3>
        </div>
        <img
          className="bobaPic"
          src="https://lh3.googleusercontent.com/proxy/yzUILAnRxamNy-enjUKmsmOFg7svKt4ceOd_deiFRtyB8-vSBReWlxLZe2qRgqNMzJuGd6r_bnVfxEf2FBlOUFsekutvFRj8rqB4LBkVrhB4Ouye4zf7Hn6d2q0ixfVhe_Y"
          width="900px"
          height="350px"
        />
      </div>
      <Spacer/>
    </div>
  );
};
