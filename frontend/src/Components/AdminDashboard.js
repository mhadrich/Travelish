import React, { useEffect , useState } from "react";
import "../css/AdminDashboard.css";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
const AdminDashboard = () => {
  const [Dashboard,setDashbord] = useState([])
  const [trigger ,setTrigger]=useState(false)
  useEffect(()=>{
    axios.get("http://localhost:4000/admin/getAllBussinesss").then((res)=>{
      Dashboard(res.data)
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
        </div>
        <div className="group-2">
          <div className="overlap">
          <img className="remove" alt="Remove" src="https://static.thenounproject.com/png/3015115-200.png" /*onClick=handleDelete(el.id)*/ />
            <div className="text-wrapper-9">{el.images}</div>
          </div>
          <div className="overlap-3"><div/>
            <div className="rectangle" />
            <div className="text-wrapper-10">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard