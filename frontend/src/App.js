import './css/App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AdminDashboard from './Components/AdminDashboard';
import AddingBusiness from './Components/AddingBusiness'
import AdminDetailView from './Components/AdminDetailView';
import SearchResults from './Components/SearchResults';

function App() {
  const [data, setData] = useState([]);
  console.log(data,'data');
  const [trigger, setTrigger] = useState(false)
  useEffect(() => { axios .get("http://localhost:3000/getAllBussinesss")
      .then((resp) => {
      setData(resp.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home data={data} trigger={trigger} setTrigger={setTrigger}/>}  />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/AdminDetailView" element={<AdminDetailView/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AddingBusiness" element={<AddingBusiness />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;