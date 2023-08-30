import React from "react";
import "../css/CreateAccount.css";

const CreateAccount = () => {
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
                <div className="input-field">
                  <div className="text-wrapper-3">Name</div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-3">Email</div>
              </div>
              <div className="input-field-2">
                <div className="text-wrapper-3">Password</div>
              </div>
              <div className="frame-2">
                <div className="text-button">
                  <div className="text-wrapper-4">Create account</div>
                </div>
                <div className="description-link">
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-5">Already have an account?</div>
                  </div>
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-6">Log in</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-7">Business owner</div>
            </div>
          </div>
          <div className="rectangle" />
        </div>
        <div className="group">
          <div className="logo">
            <img className="img" alt="Group" src="group-2.png" />
            <div className="text-wrapper-8">Travelish</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount