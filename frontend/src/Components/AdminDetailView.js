import React from "react";
import "../css/AdminDetailView.css";
// import axios from "axios";
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const AdminDetailView = (props) => {
  // const obj=props.data

  const [adress, setAdress] = useState("")
  const [descriptions, setDescriptions] = useState("")
  const [hour, setHour] = useState("")
  const [phones, setPhones] = useState("")

  // const [value, setValue] = React.useState(0);


  // useEffect(()=>{
  //   setAdress(adresse)
  //   setDescriptions(description)
  //   setHour(hours)
  //   setPhones(phone)
  //   },[])

  // const handleClick = () => {
  // axios.put(`/////////////${}`, {
  // name:obj.name
  // category:obj.category
  // images:obj.images
  // adresse: adress,
  // description: descriptions,
  // hours: hour,
  // phone: phones,
  // zone:obj.zone
  // adminID:obj.adminID
  //     }).then((response) => {
  //       console.log(response)
  //     }).catch(err => console.log(err))
  //   }


  const [contactForm, setContactForm] = useState(false)
  const [editContact, setEditContact] = useState(true);
  const toggler = () => {
    setContactForm(!contactForm);
    setEditContact(!editContact)
  };



  const [showForm, setShowForm] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const toggle = () => {
    setShowForm(!showForm);
    setEditButton(!editButton)
  };

  const mystyle = {
    // width: "2",
    // height: "2",
    marginLeft: '-30px',
    style: "border:0;",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade"
  }

  return (
    <div className="business-owner">
      <div className="div">
        <div className="text-wrapper-7">Steak House</div>
        <div className="group-2">
          {/* <div className="text-wrapper-8">70 reviews</div> */}
          <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',           
              }}           
            >
              <Rating
                name="hover-feedback"
                value={3}
                emptyIcon={<StarIcon style={{ opacity: 0.2 }} fontSize="inherit" />}
                style={{pointerEvents:"none"}}
              />
            </Box>


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
            {/* <div className="text-wrapper-8">70 reviews</div> */}
            <Box
              sx={{
                width: 150,
                display: 'flex',
                alignItems: 'center',           
              }}           
            >
              <Rating
                name="hover-feedback"
                value={5}
                emptyIcon={<StarIcon style={{ opacity: 0.2 }} fontSize="inherit" />}
                style={{pointerEvents:"none"}}
              />
            </Box>
          </div>
          <img className="vector" alt="Vector" src="vector-8.svg" />
          {/* <div className="div-wrapper">
            <div className="text-wrapper-10">Write a Response</div>
          </div> */}
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-9">Description</div>
          <div className="overlap-wrapper">
            <div>
              {showForm ? (
                <textarea id="story" name="story" rows="5" cols="33" onChange={(e) => setDescriptions(e.target.value)}>
                  default value description </textarea>
              ) : (
                <p id="description"> Réservations, Terrasse, Places assises, Télévision, Sert de l'alcool, Bar complet, Service de table, Concerts.</p>
              )}
            </div>

            <div className="overlap-3" onClick={toggle} >
              {
                <div className="text-wrapper-11" >{editButton ? "Edit" : "Submit"}</div>
              }
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-9">Location &amp; contact</div>
          <div className="overlap-wrapper">

          </div >
          <div style={mystyle}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51757.48343061744!2d10.6180544!3d35.82833455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275759ac9d10d%3A0x698e3915682cef7d!2sSousse!5e0!3m2!1sfr!2stn!4v1693647167528!5m2!1sfr!2stn" ></iframe>
          </div>
          <div />
          {contactForm ? (
            <div>
              <div className="group-4">
                <input defaultValue={"horaires"} onChange={(e) => setHour(e.target.value)} />
              </div>
              <div className="group-5">
                <input defaultValue={"phone"} onChange={(e) => setPhones(e.target.value)} />
              </div>
              <div className="group-6">
                <input defaultValue={"adress"} onChange={(e) => setAdress(e.target.value)} />
              </div>
            </div>
          )
            : (
              <div>
                <div className="group-4">
                  <div className="text-wrapper-12">16:00 - 03:00</div>
                  {/* <img className="image" alt="Image" src="image-5.png" /> */}
                </div>
                <div className="group-5">
                  <div className="text-wrapper-13">55555555</div>
                  {/* <img className="mask-group-2" alt="Mask group" src="image.png" /> */}
                </div>
                <div className="group-6">
                  <p className="p">14 Rue de Liberté, Tunis</p>
                  {/* <img className="image" alt="Image" src="image-7.png" /> */}
                </div>
              </div>
            )}
          <div className="overlap-5" onClick={toggler}>
            {
              <div className="text-wrapper-11" >{editContact ? "Edit" : "Submit"}</div>
            }
          </div>
        </div>
      </div>
    </div>

  );

};

export default AdminDetailView;