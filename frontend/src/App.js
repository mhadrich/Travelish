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
import NewComment from './Components/NewComment'
import SignIn from './Components/SignIn'
import CreateAccount from './Components/CreateAccount'
import UserDetailView from './Components/UserDetailView'
import SplashScreen from './Components/SplashScreen';


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
          <Route path='/' element={<SplashScreen />}></Route>
          <Route path="/Home" element={<Home data={data} trigger={trigger} setTrigger={setTrigger}/>}  />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/AdminDetailView" element={<AdminDetailView/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AddingBusiness" element={<AddingBusiness />} />
          <Route path="/NewComment" element={<NewComment/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/CreateAccount" element={<CreateAccount/>} />
          <Route path="/UserDetailView" element={<UserDetailView/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;