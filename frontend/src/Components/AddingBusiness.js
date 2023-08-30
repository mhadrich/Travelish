import React, { useEffect } from "react";
import { useState } from "react";
import "../css/AddingBusiness.css";
// import axios from "axios";
// import { Link } from "react-router-dom";
 const AddingBusiness = () => {
// const handleSubmit=(e)=>{
//   e.preventDefault()
//   axios.post("http://localhost:3000/Add",{name:Name,adress:Adress,phones:phone,Hours:hours,Zone:Zone,description:description})
//   .then((res)=>{
//     console.log(res.data);
//     <Link to='/'></Link>
//   }).catch((err)=>{
//     console.log(err);
//   })
// }
  const[Name,setName]=useState('');
  const[Adress,setAdress]=useState('');
  const[phone,setPhone]=useState('');
  const[hours,setHours]=useState('');
  const[Zone,setZone]=useState('');
  const[description,setDescription]=useState('')
  return (
    <div className="adding-business">
      <div className="div">
        <div className="overlap">
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="text-wrapper-7">+</div>
            <div className="group-2">
              <div className="text-wrapper-8">Name</div>
              <input className="rectangle-2" onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="group-3">
              <div className="text-wrapper-8">Zone</div>
              <select className="rectangle-2">
              <option>Hammamet</option>
              <option>Sousse</option>
              <option>Monastir</option>
               <option>Djerba</option>
               </select>
            </div>
          </div>
          <p className="p">Let’s start adding your business</p>
        </div>
        <div className="group-4">
          <div className="text-wrapper-8">Adress</div>
          <input className="rectangle-2" onChange={(e)=>{setAdress(e.target.value)}}/>
        </div>
        <div className="group-5">
          <div className="text-wrapper-8">Phone Number</div>
          <input className="rectangle-2" onChange={(e)=>{setPhone(e.target.value)}} />
        </div>
        <div className="group-6">
          <div className="text-wrapper-8">Hours</div>
          <input className="rectangle-2" onChange={(e)=>{setHours(e.target.value)}} />
        </div>
        <div className="group-7">
          <div className="text-wrapper-8">Category</div>
          <select className="rectangle-2">
            <option>Hotels</option>
            <option>Restaurants</option>
            <option>Bars</option>
            <option>Activities</option>
          </select>
        </div>
        <div className="group-8">
          <div className="text-wrapper-8">Description</div>
          <input  className="rectangle-3" onChange={(e)=>{setDescription(e.target.value)}} />
          <div className="buttonPlace">
      <button className="button">Submit</button>
      </div>
        </div>
      </div>
    </div>
  );
};

