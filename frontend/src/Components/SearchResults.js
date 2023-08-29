import React from "react";
import "../css/SearchResults.css";

export const SearchResults = () => {
  return (
    <div className="user-view">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Steak House</div>
          <div className="group">
            <img className="star" alt="Star" src="star-1.svg" />
            <img className="img" alt="Star" src="star-2.svg" />
            <img className="star-2" alt="Star" src="star-3.svg" />
            <img className="star-3" alt="Star" src="star-4.svg" />
            <img className="star-4" alt="Star" src="star-5.svg" />
          </div>
        </div>
        <div className="overlap-group">
          <img className="rectangle" alt="Rectangle" src="rectangle-11.png" />
          <img className="rectangle-2" alt="Rectangle" src="rectangle-12.png" />
          <img className="rectangle-3" alt="Rectangle" src="image.png" />
        </div>
      </div>
    </div>
  );
};
