import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.get(`/getOneAdmin/${email}`);
      const adminData = response.data;

      if (adminData && adminData.password === password) {
        // Successfully signed in
        // You can perform any additional actions here

        // For now, let's navigate to the home page
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred while signing in");
    }
  };
  return (
    <div className="sign-in">
      <div className="div">
        <div className="create-account">
          <div className="overlap-group">
            <div className="group">
              <div className="headline">
                <div className="text-wrapper">Welcome back</div>
              </div>
              <div className="input-field">
                <div className="text-wrapper-2">Email</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-2">Password</div>
              </div>
              <div className="text-button">
                <div className="text-wrapper-3" onClick={handleSignIn}>
                  Sign In
                </div>
              </div>
              {error && <div className="error-message">{error}</div>}
              <div className="description-link">
                <div className="div-wrapper-2">
                  <div className="text-wrapper-4">Don’t have an account?</div>
                </div>
                <div className="div-wrapper-2">
                  <div className="text-wrapper-5">Sign up</div>
                </div>
              </div>
            </div>
            <div className="overlap">
              <p className="we-re-here-to-give">
                We’re here to give you
                <br />
                the best ideas to relax.
              </p>
            </div>
          </div>
        </div>
        <div className="logo-wrapper">
          <div className="logo">
            <img className="img" alt="Group" src="group-2.png" />
            <div className="text-wrapper-6">Travelish</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignIn
