import React from "react";
import "../css/AdminDetailView.css";
// import axios from "axios";
import {useState} from 'react';
// import { useNavigate } from 'react-router-dom';

export const AdminDetailView = () => {


  const [showForm, setShowForm] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const toggle = () => {
    setShowForm(!showForm);
    setEditButton(!editButton)
  };

  const mystyle = {
    width:"200",
     height:"100",
      style:"border:0;",
       allowfullscreen:"",
        loading:"lazy",
         referrerpolicy:"no-referrer-when-downgrade"
  }

  return (
    <div className="business-owner">
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
        <div className="text-wrapper-7">Steak House</div>
        <div className="group-2">
          <div className="text-wrapper-8">70 reviews</div>
          <img className="star" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
          <img className="star-2" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
          <img className="star-3" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
          <img className="star-4" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
          <img className="star-5" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
        </div>
        <img className="rectangle" alt="Rectangle" src="https://images.squarespace-cdn.com/content/v1/568d96e0d8af10935f798e4c/1547577857359-0DGQ011R3OEY6HJZTVYC/steak-house-316-2.jpg?format=1500w" />
        <div className="overlap">
          <p className="there-aren-t-enough">
            There aren’t enough food, service, value or
            <br />
            atmosphere ratings for Steak House yet.
            <br />
            Be one of the first to write a review!
          </p>
          <div className="text-wrapper-9">Rating &amp; Reviews</div>
          <div className="group-3">
            <div className="text-wrapper-8">70 reviews</div>
            <img className="star" alt="Star" src="image.svg" />
            <img className="star-2" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
            <img className="star-3" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
            <img className="star-4" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
            <img className="star-5" alt="Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png" />
          </div>
          <img className="vector" alt="Vector" src="vector-8.svg" />
          <div className="div-wrapper">
            <div className="text-wrapper-10">Write a Response</div>
          </div>
        </div>
       
        <div className="overlap-2">
      
          <div className="text-wrapper-9">Description</div>
       
          <div className="overlap-wrapper">
          {showForm ? (
         <input/>
     ) : (
       <p>egzgzon efiozefinozf zefzjoefpzef.</p>
     )}
     

            <div className="overlap-3" onClick={toggle} >
            {editButton ? (
              <div className="text-wrapper-11" >Edit</div>
              ) : (
                <div className="text-wrapper-11" >Submit</div>
                )}
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-9">Location &amp; contact</div>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="text-wrapper-11">Edit</div>
            </div>
          </div>
          <iframe  style={mystyle} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12765.591839929415!2d10.1885956!3d36.8808269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbe05eaab2f3%3A0x13cff2c443049ee1!2sSalle%20de%20sport%20Gold%20gym%20Ennkhilet%20El%20Ghazela!5e0!3m2!1sfr!2stn!4v1693318657076!5m2!1sfr!2stn" ></iframe>
          <div className="group-4">
            
            <div className="text-wrapper-12">16:00 - 03:00</div>
            <img className="image" alt="Image" src="image-5.png" />
          </div>
          <div className="group-5">
            <div className="text-wrapper-13">55555555</div>
            <img className="mask-group-2" alt="Mask group" src="image.png" />
          </div>
          <div className="group-6">
            <p className="p">14 Rue de Liberté, Tunis</p>
            <img className="image" alt="Image" src="image-7.png" />
          </div>
        </div>
      </div>
    </div>
  );

};


export default AdminDetailView ;