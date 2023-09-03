import React from "react";
import "../css/AdminDashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const AdminDashboard = (props) => {
  const { data, user } = props;
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

        {data &&
          data.map((el, i) => {
            return (
              <div className={`overlap-${i}`}>
                <div className="group-2">
                  <div
                    className="div-wrapper"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)),url(${el.images})`,
                    }}
                  >
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/essentials-73/24/039_-_Cross-512.png"
                      style={{
                        width: "40px",
                        marginLeft: "220px",
                        marginTop: "5px",
                      }}
                      onClick={() => handleDelete(el.id)}
                    ></img>
                    <div className="text-wrapper-9">{el.name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="overlap-4">
          <Link to="/AddingBusiness">
            <div className="rectangle">
              <div className="text-wrapper-10">+</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
