import React from "react";
import "../css/AdminDashboard.css";

export const AdminDashboard = () => {
  return (
    <div className="business-owner-view">
      <div className="div">
        <div className="text-wrapper">Welcome back username</div>
        <div className="text-wrapper-2">Dashboard</div>
        <div className="group">
          <div className="logo">
            <img className="img" alt="Group" src="group-2.png" />
            <div className="text-wrapper-3">Travelish</div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-4">Restaurants</div>
            <div className="text-wrapper-5">Hotels</div>
            <div className="text-wrapper-6">Bars</div>
            <div className="text-wrapper-7">Activities</div>
          </div>
          <div className="sign-in">
            <div className="overlap-group">
              <div className="text-wrapper-8">username</div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap">
            <div className="text-wrapper-9">Steak House</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-9">Movenpick</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-9">Hard Rock</div>
          </div>
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="text-wrapper-10">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
