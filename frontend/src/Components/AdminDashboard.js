import React, { useEffect , useState } from "react";
import "../css/AdminDashboard.css";
import {useNavigate} from 'react-router-dom'
const AdminDashboard = () => {
  // const navigate=useNavigate();
  // const [Dashboard,setDashbord] = useState([])
  // useEffect(()=>{
  //   axios.get('fgfgfg').then((res)=>{
  //     Dashboard(res.data)
  //     console.log(Dashboard);
  //   })
  // },[])
  return (
    <div className="business-owner-view">
      <div className="div">
        <div className="text-wrapper">Welcome back {/*el.userName*/}</div>
        <div className="text-wrapper-2">Dashboard</div>
        <div className="group">
        </div>
        <div className="group-2">
          <div className="overlap">
            <div className="text-wrapper-9">Steak House{/*el.Title*/}</div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-1">
            </div>
            <div className="text-wrapper-9">Movenpick{/*el.Title*/}</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-9">Hard Rock{/*el.Title*/}</div>
          </div>
          <div className="overlap-3" /*onClick={()=>{navigate('/POST')}}*/>
            <div className="rectangle" />
            <div className="text-wrapper-10">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;