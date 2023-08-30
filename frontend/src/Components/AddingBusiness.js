import React from "react";
import "../css/AddingBusiness.css";

export const AddingBusiness = () => {
  return (
    <div className="adding-business">
      <div className="div">
        <div className="group">
          <div className="logo">
            <img className="img" alt="Group" src="group-2.png" />
            <div className="text-wrapper">Travelish</div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-2">Restaurants</div>
            <div className="text-wrapper-3">Hotels</div>
            <div className="text-wrapper-4">Bars</div>
            <div className="text-wrapper-5">Activities</div>
          </div>
          <div className="sign-in">
            <div className="overlap-group">
              <div className="text-wrapper-6">username</div>
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="text-wrapper-7">+</div>
            <div className="group-2">
              <div className="text-wrapper-8">Name</div>
              <div className="rectangle-2" />
            </div>
            <div className="group-3">
              <div className="text-wrapper-8">Zone</div>
              <div className="rectangle-2" />
            </div>
          </div>
          <p className="p">Let’s start adding your business</p>
        </div>
        <div className="group-4">
          <div className="text-wrapper-8">Adress</div>
          <div className="rectangle-2" />
        </div>
        <div className="group-5">
          <div className="text-wrapper-8">Phone Number</div>
          <div className="rectangle-2" />
        </div>
        <div className="group-6">
          <div className="text-wrapper-8">Hours</div>
          <div className="rectangle-2" />
        </div>
        <div className="group-7">
          <div className="text-wrapper-8">Category</div>
          <div className="rectangle-2" />
        </div>
        <div className="group-8">
          <div className="text-wrapper-8">Description</div>
          <div className="rectangle-3" />
        </div>
      </div>
    </div>
  );
};


export default AddingBusiness;
