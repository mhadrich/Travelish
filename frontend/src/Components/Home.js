import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { useNavigate, useLocation  } from "react-router-dom";
import "../css/Home.css";

export const Home = ({data,setData}) => {
  const navigate=useNavigate()
  const location=useLocation()

  const [trigger,setTrigger]=useState(false)

////////////////////////////// search ////////////////////////////
const search = (terms) => {
  if (!terms) {
    setTrigger(!trigger);
  } else {
    setData(
      data.filter((e) =>
        e.place.toLowerCase().includes(terms.toLowerCase())                   
      )
    );
  }
};

/////////////////////////////////////////////////////////////////


  return (
    <div className="home">
      <div className="div-2">
        {data.map((e, i) => {
          return (
            <div key={i}>
              <div className="text-wrapper-7">Where to?</div>
              <div className="search">
                <img className="image" alt="Image" src="image-1.png" />
                <div className="overlap-group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-8" search={search}>Search</div>
                  </div>
                </div>
              </div>
              <img className="rectangle" alt="Rectangle" src={e.images} />

              <div className="text-wrapper-9">Top things to Do</div>
              <div className="text-wrapper-10">Traveler’s Choice</div>
              <div className="group-2">
                <div className="overlap">
                  <div className="text-wrapper-11" onClick={()=>{ navigate("/Restaurants") }}>Restaurants</div>
                </div>
                <div className="overlap-2">
                  <div className="text-wrapper-11" onClick={()=>{ navigate("/Hotels") }}>Hotels</div>
                </div>
                <div className="overlap-3">
                  <div className="text-wrapper-11" onClick={()=>{ navigate("/Bars") }}>Bars</div>
                </div>
                <div className="overlap-4">
                  <div className="text-wrapper-11" onClick={()=>{ navigate("/Activities") }}>Activities</div>
                </div>
              </div>
              <NavBar className="group-5" />
            </div>
          )
        })}


      </div>
    </div>
  );
};