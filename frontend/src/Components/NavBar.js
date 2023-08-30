import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  const navigate=useNavigate()

  return (
    <div className="group">
      <div className="logo">
        <img className="img" alt="Group" src="https://generation-sessions.s3.amazonaws.com/d930e451834e355cc8fe2872204d2fe0/img/group-2@2x.png" />
        <div className="text-wrapper" onClick={()=>{ navigate("/" ) }} >Travelish</div>
      </div>
      <div className="div">
        <div className="text-wrapper-2" onClick={()=>{ navigate("/Restaurants" ) }} >Restaurants</div>
        <div className="text-wrapper-3" onClick={()=>{ navigate("/Hotels" ) }}>Hotels</div>
        <div className="text-wrapper-4" onClick={()=>{ navigate("/Bars" ) }}>Bars</div>
        <div className="text-wrapper-5" onClick={()=>{ navigate("/Activities" ) }}>Activities</div>
      </div>
      <div className="sign-in">
        <div className="overlap-group">
          <div className="text-wrapper-6" onClick={()=>{ navigate("/SignIn" ) }}>Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;