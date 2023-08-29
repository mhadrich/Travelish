import React from "react";
import { NavBar } from "./NavBar";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <div className="text-wrapper-7">Where to?</div>
        <div className="search">
          <img className="image" alt="Image" src="image-1.png" />
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-8">Search</div>
            </div>
          </div>
        </div>
        <img className="rectangle" alt="Rectangle" src="image.png" />
        <img className="rectangle-2" alt="Rectangle" src="rectangle-11.png" />
        <img className="rectangle-3" alt="Rectangle" src="rectangle-10.png" />
        <div className="text-wrapper-9">Top things to Do</div>
        <div className="text-wrapper-10">Traveler’s Choice</div>
        <div className="group-2">
          <div className="overlap">
            <div className="text-wrapper-11">Restaurants</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-11">Hotels</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-11">Bars</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-11">Activities</div>
          </div>
        </div>
        <NavBar className="group-5" />
      </div>
    </div>
  );
};
