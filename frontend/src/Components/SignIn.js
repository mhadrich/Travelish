import React from "react";
import "../css/SignIn.css";

const SignIn = () => {
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
                <div className="text-wrapper-3">Sign In</div>
              </div>
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
