import React, { useEffect , useState } from "react";
import "../css/AdminDashboard.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const AdminDashboard = () => {
  // const navigate=useNavigate();
  // const [Dashboard,setDashbord] = useState([])
  // const [trigger ,setTrigger]=useState(false)
  // useEffect(()=>{
  //   axios.get('fgfgfg').then((res)=>{
  //     Dashboard(res.data)
  //     console.log(Dashboard);
  //   })
  // },[])


  // const handleDelete= (id) => {
  //   axios.delete(`http://localhost:3000/delete/${id}`).then((resp)=>{
  //     setTrigger(!trigger)
  //    }).catch((err)=>{console.log(err)})
  //   }


  return (
    <div className="business-owner-view">
      <div className="div">
        <div className="text-wrapper">Welcome back {/*el.userName*/}</div>
        <div className="text-wrapper-2">Dashboard</div>
        <div className="group">
        </div>
        <div className="group-2">
          <div className="overlap">
          <img className="remove" alt="Remove" src="https://static.thenounproject.com/png/3015115-200.png" /*onClick=handleDelete(el.id)*/ />
            <div className="text-wrapper-9">Steak House{/*el.Title*/}</div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-1">
            </div>
            <img className="remove" alt="Remove" src="https://static.thenounproject.com/png/3015115-200.png" />
            <div className="text-wrapper-9">Movenpick{/*el.Title*/}</div>
          </div>
          <div className="overlap-2">
          <img className="remove" alt="Remove" src="https://static.thenounproject.com/png/3015115-200.png" />
            <div className="text-wrapper-9">Hard Rock{/*el.Title*/}</div>
          </div>
          <div className="overlap-3"  /*onClick={()=>{navigate('/POST')}}*/>
            <div className="rectangle" />
            <div className="text-wrapper-10">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard