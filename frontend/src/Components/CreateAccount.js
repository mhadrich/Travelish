import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CreateAccount.css";
import axios from 'axios'

const CreateAccount = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    userName : '',
    password : '',
    email : '',
    role : "1"
  })
console.log(newUser);
  

  const handleChange = (input) =>{
    const {name, value} = input.target;
    setNewUser((prevData)=>(
      {
        ...prevData,
        [name] : value
      }
    ))
  }

  const handleCheckboxChange = () => {
    if(isChecked){
      setNewUser((prevData)=>(
        {
          ...prevData,
          role : "1"
        }
      ))
    } else {
      setNewUser((prevData)=>(
        {
          ...prevData,
          role : "0"
        }
      ))
    }
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4004/admin/register',newUser)
    .then((response)=>{
      navigate('/Home');
      window.location.reload(false);
      console.log('Successful add',response.data);
    })
    .catch((error)=>console.log('Failed to add',error))
  }

  return (
    <div className="create-account">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="we-re-here-to-give-wrapper">
                <p className="we-re-here-to-give">
                  We’re here to give you
                  <br />
                  the best ideas to relax.
                </p>
              </div>
              <div className="text-wrapper">Create account</div>
              <div className="frame">
                <div className="text-wrapper-2">Let’s get you started!</div>
                <input className="input-field-userName" placeholder="Name" name='userName' value={newUser.userName} onChange={handleChange}></input>
              </div>
              <input className="input-field-Email" placeholder="Email" name='email' value={newUser.email} onChange={handleChange}></input>
              <input type="password" className="input-field-Password" placeholder="Password" name='password' value={newUser.password} onChange={handleChange}></input>
              <div className="frame-2">
                <div className="create-button" onClick={handleSubmit}>
                  <div className="text-wrapper-4">Create account</div>
                </div>
                <div className="description-link">
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-5">Already have an account?</div>
                  </div>
                  <div className="div-wrapper-2">
                    <div className="signin-link" onClick={() => { navigate("/SignIn") }}>Log in</div>
                  </div>
                </div>
              </div>
              <div className="input-field-BO">Business owner</div>
            </div>
          </div>
          <input type="checkbox" className="rectangle" onChange={handleCheckboxChange} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount