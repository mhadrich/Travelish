import React from "react";
import "../css/AdminDashboard.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AdminDashboard = (props) => {
  const { data, user, select } = props;
  const navigate = useNavigate();
  var counter = 0;
  const [welcome, setWelcome] = useState("Anonymous");
  useEffect(() => {
    if (user) {
      setWelcome(user);
    }
  }, [user]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4004/bussiness/deleteOneBussiness/${id}`)
      .then((resp) => {
        console.log("delete successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="business-owner-view">
      <div className="div">
        <div className="text-wrapper">Welcome back, {welcome}</div>
        <div className="text-wrapper-2">Dashboard</div>
        
          {data && data.map((e,i)=>{
            counter = i+1;
            return(
              <div className={`business-${i}`}>
              <div 
                className='overlap'
                onClick={()=>{
                  select(e);
                  navigate('/AdminDetailView');
                }}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)),url(${e.images})`,
                  }}
              >
              <img className="img" alt="Remove" src="https://cdn4.iconfinder.com/data/icons/essentials-73/24/039_-_Cross-512.png" onClick={() => handleDelete(e.id)} />
              <div className="text-wrapper-3">{e.name}</div>
            </div>
            </div>
            )
          })}
        
        <Link to="/AddingBusiness">
        <div className={`business-${counter}`}>
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="text-wrapper-4">+</div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
};

export default AdminDashboard;
