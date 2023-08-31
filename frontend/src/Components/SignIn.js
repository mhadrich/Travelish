import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handleSignIn = async () => {
  //   try {
  //     const response = await axios.get(`/getOneAdmin/${email}`);
  //     const adminData = response.data;

  //     if (adminData && adminData.password === password) {
  //       // Successfully signed in
  //       // You can perform any additional actions here

  //       // For now, let's navigate to the home page
  //       navigate("/");
  //     } else {
  //       setError("Invalid email or password");
  //     }
  //   } catch (error) {
  //     setError("An error occurred while signing in");
  //   }
  // };
  return (
    <div className="sign4in">
      <div className="dive">
        <div className="create-account">
          <div className="overlape-group">
            <div className="groupe">
              <div className="headlinee">
                <div className="text-wrappere">Welcome back</div>
              </div>
              
                <input className="text-wrappere-200" placeholder="Email" />
              
              <div className="div-wrappere">
                <input className="text-wrappere-2" placeholder="Password"/>
              </div>
              <div className="text-button">
                <div className="text-wrappere-3" /*onClick={handleSignIn}*/>
                  Sign In
                </div>
              </div>
              {error && <div className="error-message">{error}</div>}
              <div className="description-link">
                <div className="div-wrapper-2">
                  <div className="text-wrappere-4">Don’t have an account?</div>
                </div>
                <div className="div-wrapper-2">
                  <div className="text-wrappere-5">Sign up</div>
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
