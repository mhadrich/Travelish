import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/NavBar.css";
export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  // Determine whether to show the full NavBar or just the logo
  const showFullNavBar = location.pathname !== "/SignIn";
  return (
    <div className="group">
      <div className="logo" onClick={() => navigate("/")}>
        <img
          className="img"
          alt="Group"
          src="https://spng.pngfind.com/pngs/s/669-6691661_new-travel-peeps-travel-agency-logo-png-transparent.png"
        />
        <div className="text-wrapper" onClick={() => navigate("/")}>
          Travelish
        </div>
      </div>
      {showFullNavBar && (
        <div className="div">
          <div
            className="text-wrapper-2"
            onClick={() => navigate("/Restaurants")}
          >
            Restaurants
          </div>
          <div className="text-wrapper-3" onClick={() => navigate("/Hotels")}>
            Hotels
          </div>
          <div className="text-wrapper-4" onClick={() => navigate("/Bars")}>
            Bars
          </div>
          <div
            className="text-wrapper-5"
            onClick={() => navigate("/Activities")}
          >
            Activities
          </div>
        </div>
      )}
      {showFullNavBar && (
        <div className="sign-in">
          <div className="overlap-group">
            <div
              className="text-wrapper-6"
              onClick={() => navigate("/SignIn")}
            >
              Sign in
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;