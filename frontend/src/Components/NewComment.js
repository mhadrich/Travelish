import React from "react";
import "../css/NewComment.css";

const NewComment = () => {
  return (
    <div className="add-comment">
      <div className="div">
        <div className="group">
          <p className="tell-us-how-was-your">
            Tell us, how was
            <br />
            your visit?
          </p>
          <div className="selected-business">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src="https://www.hawksmoornyc.com/wp-content/uploads/Prime-rib-with-sides-2--1024x683.jpg" />
              <div className="text-wrapper">Steak House</div>
              <p className="p">14 Rue de Liberté, Tunis</p>
            </div>
          </div>
          <img className="separator" alt="Separator" src="separator.svg" />
          <p className="text-wrapper-2">How would you rate your experience?</p>
          <div className="text-wrapper-3">Write a review</div>
          <div className="group-2">
            <img className="star" alt="Star" src="https://seeklogo.com/images/R/red-star-logo-2D3327A276-seeklogo.com.png" />
            <img className="img" alt="Star" src="https://seeklogo.com/images/R/red-star-logo-2D3327A276-seeklogo.com.png" />
            <img className="star-2" alt="Star" src="https://seeklogo.com/images/R/red-star-logo-2D3327A276-seeklogo.com.png" />
            <img className="star-3" alt="Star" src="https://seeklogo.com/images/R/red-star-logo-2D3327A276-seeklogo.com.png" />
            <img className="star-4" alt="Star" src="https://seeklogo.com/images/R/red-star-logo-2D3327A276-seeklogo.com.png" />
          </div>
          <textarea className="rectangle-2" />
        </div>
        <div className="buttonPlace">
      <button className="button">Submit</button>
      </div>
      </div>
    </div>
    
  );
};


export default NewComment
