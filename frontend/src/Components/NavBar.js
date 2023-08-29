import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="group">
      <div className="logo">
        <img className="img" alt="Group" src="group-2.png" />
        <div className="text-wrapper">Travelish</div>
      </div>
      <div className="div">
        <div className="text-wrapper-2">Restaurants</div>
        <div className="text-wrapper-3">Hotels</div>
        <div className="text-wrapper-4">Bars</div>
        <div className="text-wrapper-5">Activities</div>
      </div>
      <div className="sign-in">
        <div className="overlap-group">
          <div className="text-wrapper-6">Sign in</div>
        </div>
      </div>
    </div>
  );
};