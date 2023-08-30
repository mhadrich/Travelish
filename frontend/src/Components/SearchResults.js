import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import "../css/SearchResults.css";

export const SearchResults = ({ searchResults }) => {
  const location = useLocation();
  return (
    <div className="user-view">
      {searchResults.map((result, index) => (
        <div className="div" key={index}>
          <div className="overlap">
            <div className="text-wrapper">{result.name}</div>
            <div className="group">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <img key={starIndex} className="star" alt="Star" src={`star-${starIndex}.svg`} />
              ))}
            </div>
          </div>
          <div className="overlap-group">
            <img className="rectangle" alt="Rectangle" src={result.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults ;

