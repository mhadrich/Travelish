import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/SignIn.css";
import jwt_decode from 'jwt-decode';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  const handleSignIn = (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:5000/admin/login", { email, password })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token",token)
        console.log(res.data,"hhhhh");
        if (res.data.role === 'admin') {
          // If it's an admin, navigate to the admin dashboard
          navigate("/AdminDashboard");
        } else {
          // If it's a regular user, navigate to the home page
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Invalid email or password");
      });
  };
  
  return (
    <div className="sign4in">
      <div className="dive">
        <div className="create-account">
          <div className="overlape-group">
            <div className="groupe">
              <div className="headlinee">
                <div className="text-wrappere">Welcome back</div>
              </div>

              <input className="text-wrappere-200" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <div className="div-wrappere">
                <input className="text-wrappere-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="text-button" onClick={handleSignIn}>
                <div className="text-wrappere-3" >
                  Sign In
                </div>
              </div>
              <div className="error-message-wrapper">
                {error && <div className="error-message">{error}</div>}
              </div>
              <div className="description-link">
                <div className="div-wrapper-2">
                  <div className="text-wrappere-4">Don’t have an account?</div>
                </div>
                <div className="div-wrapper-2">
                  <div className="text-wrappere-5" onClick={() => { navigate("/CreateAccount") }}>Sign up</div>
                </div>
              </div>
            </div>
            <div className="overlape">
              <p className="we-re-here-to-give">
                We’re here to give you
                <br />
                the best ideas to relax.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignIn


