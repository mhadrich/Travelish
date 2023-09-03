/*import React, { useEffect , useState } from "react";
import "../css/AdminDashboard.css";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
const AdminDashboard = () => {
  const [Dashboard,setDashbord] = useState([])
  const [trigger ,setTrigger]=useState(false)
  useEffect(()=>{
    axios.get("http://localhost:5000/admin/getAllBussinesss").then((res)=>{
      setDashbord(res.data)
      console.log(Dashboard);
    })
  },[trigger])


  // const handleDelete= (id) => {
  //   axios.delete(`http://localhost:3000/delete/${id}`).then((resp)=>{
  //     setTrigger(!trigger)
  //    }).catch((err)=>{console.log(err)})
  //   }


  return (
    <div className="business-owner-view">
      <div className="div">
        <div className="text-wrapper">Welcome back </div>
        <div className="text-wrapper-2">Dashboard</div>
        <div className="group">
        {Dashboard.map((el,i)=>{
          return(
            <div key={i} className="group-2">
            <div className="overlap">
            <img className="remove" alt="Remove" src="https://static.thenounproject.com/png/3015115-200.png" /*onClick=handleDelete(el.id) />
              <div className="text-wrapper-9">{el.images}</div>
            </div>
            <div className="overlap-3">
              <div className="rectangle" />
              <div className="text-wrapper-10">+</div>
            </div>
          </div>
          )
        })}
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard*/
import React from "react";
import "../css/AdminDashboard.css";
import axios from "axios";
import {Link} from 'react-router-dom'
import { useState,useEffect } from "react";
 const AdminDashboard = () => {
  const [Dashboard,setDashbord] = useState([])
  const [trigger ,setTrigger]=useState(false)
  useEffect(()=>{
    axios.get("http://localhost:4004/bussiness/getAllBussinesss").then((res)=>{
      setDashbord(res.data)
      console.log(Dashboard);
    })
  },[trigger])
  
  const handleDelete= (id) => {
     axios.delete(`http://localhost:4004/bussiness/deleteOneBussiness/${id}`).then((resp)=>{
        setTrigger(!trigger)
       }).catch((err)=>{console.log(err)})
      }

   return (
     <div className="business-owner-view">
       <div className="div">
         <div className="text-wrapper">Welcome back username</div>
         <div className="text-wrapper-2">Dashboard</div>

         <div className="overlap">
           <div className="group-2">
            {Dashboard.map((el,i)=>{
              return(
                <div className="div-wrapper" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)),url(${el.images})`}}>
                  <img src="https://image.shutterstock.com/image-vector/close-icon-menu-vector-260nw-405303016.jpg" style={{width:"40px" , marginLeft:"190px" ,marginTop:"10px"}} onClick={()=>handleDelete(el.id)}></img>
               <div className="text-wrapper-9">{el.name}</div>
             </div>
              )
            })}
            <div className="overlap-4">
               <div className="rectangle" />
               <Link to='/AddingBusiness' className="text-wrapper-10">+</Link>
             </div>
             
             {/* <div className="overlap-2">
               <div className="text-wrapper-9">Movenpick</div>
             </div>
             <div className="overlap-3">
               <div className="text-wrapper-9">Hard Rock</div>
             </div> */}
           </div>
         </div>
       </div>
     </div>
   );
 };




export default AdminDashboard