import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import bobahhh from "../../public/images/bobahhh.png";
import aqua9Logo from "../../public/images/aqua9_logo.png";
import bobaBackground from "../../public/images/boba_background.jpg";
const MAPBOX_KEY = require("../../secrets");
import mapboxgl from "mapbox-gl";
import { Spacer } from "../components";

mapboxgl.accessToken = MAPBOX_KEY;

export const Homepage = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-118.29121, 34.072665],
        zoom: 18,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

      const marker = new mapboxgl.Marker()
        .setLngLat([-118.29121, 34.072665])
        .addTo(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div>
      {/* <!-- See navbar.js for reference of what will show up above --> */}
      <div className="sayBobahhh">
        {/* <div className="parentImg">
          <img id="bobaBg" src={bobaBackground} alt="boba" />
          <img
            id="bobahhhImg"
            src={bobahhh}
            alt="say bob-ahhh"
            width="800px"
            height="300px"
          />
        </div> */}
        <br />
        <img
          src="https://assets3.thrillist.com/v1/image/2811343/1000x666.6666666666666/flatten;crop;jpeg_quality=70"
          alt="Bubble Tea"
        />
        <div className="titleContainer">
          <h1 className="homeTitle">Hey Cuteas!</h1>
          <h1>Grand Opening Special: BUY ONE GET ONE FREE</h1>
        </div>
        <Spacer />
      </div>
      <br />
        <br />
      <div className="mapContainer">
        
        <div ref={(el) => (mapContainer.current = el)} className="map" />
        <div className="textContainer">
          <h3>Come Partea!</h3>
          <h3 className="aboutText">100 1/2 S Vermont Ave <br/> Los Angeles, CA 90004</h3>
          <h3 className="aboutText">Find us on <a href="https://www.yelp.com/biz/h2boba-los-angeles" target="_blank">
              <span className="links">Yelp</span>
            </a>
            <img src="https://image.flaticon.com/icons/svg/2111/2111746.svg" width="40px"height="40px"/>
            </h3>
        </div>
        <div className="textContainer">
        <h3>Hours:</h3>
          <h3 className="aboutText">Monday - Saturday <br /> 10AM - 7PM</h3>
        </div>
      </div>
      <Spacer />
    </div>
  );
};
