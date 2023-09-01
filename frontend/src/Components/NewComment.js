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
              <img className="rectangle" alt="Rectangle" src="rectangle-25.svg" />
              <div className="text-wrapper">Steak House</div>
              <p className="p">14 Rue de Liberté, Tunis</p>
            </div>
          </div>
          <img className="separator" alt="Separator" src="separator.svg" />
          <p className="text-wrapper-2">How would you rate your experience?</p>
          <div className="text-wrapper-3">Write a review</div>
          <div className="group-2">
            <img className="star" alt="Star" src="star-1.svg" />
            <img className="img" alt="Star" src="star-2.svg" />
            <img className="star-2" alt="Star" src="star-3.svg" />
            <img className="star-3" alt="Star" src="star-4.svg" />
            <img className="star-4" alt="Star" src="star-5.svg" />
          </div>
          <div className="rectangle-2" />
        </div>
      </div>
    </div>
  );
};


export default NewComment
