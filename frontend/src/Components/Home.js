import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchResults } from "./SearchResults"; // Import the SearchResults component
import "../css/Home.css";

export const Home = ({ data, setData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [trigger, setTrigger] = useState(false);
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]); // State for search results

  ////////////////////////////// search ////////////////////////////
  const search = (terms) => {
    if (!terms) {
      setTrigger(!trigger);
      setSearchResults([]); // Clear search results if terms are empty
    } else {
      setSearchResults(
        data.filter((e) =>
          e.name.toLowerCase().includes(terms.toLowerCase())
        )
      );
    }
  };

  const handleSearch = () => {
    search(input);
  };

  /////////////////////////////////////////////////////////////////////

  return (
    <div className="home">
      <div className="div-2">
        <div>
          <div className="text-wrapper-7">Where to?</div>
          <div className="search">
            <img className="image" alt="Image" src="image-1.png" />
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <input
                  type="text"
                  placeholder="looking for ..."
                  className="search"
                  onChange={(event) => setInput(event.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        {searchResults.length > 0 ? (
          <SearchResults searchResults={searchResults} />
        ) : (
          data.map((e, i) => {
            return (
              <div key={i}>

                <img className="rectangle" alt="Rectangle" src={e.images} />

                <div className="text-wrapper-9">Top things to Do</div>
                <div className="text-wrapper-10">Traveler’s Choice</div>
                <div className="group-2">
                  <div className="overlap">
                    <div className="text-wrapper-11" onClick={() => { navigate("/Restaurants") }}>Restaurants</div>
                  </div>
                  <div className="overlap-2">
                    <div className="text-wrapper-11" onClick={() => { navigate("/Hotels") }}>Hotels</div>
                  </div>
                  <div className="overlap-3">
                    <div className="text-wrapper-11" onClick={() => { navigate("/Bars") }}>Bars</div>
                  </div>
                  <div className="overlap-4">
                    <div className="text-wrapper-11" onClick={() => { navigate("/Activities") }}>Activities</div>
                  </div>
                </div>
                <NavBar className="group-5" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
