import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import NavBar from "./NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import SearchResults from "./SearchResults";
import "../css/Home.css";
import 'swiper/css'
const Home = ({ data, trigger, setTrigger }) => {

console.log(data,"daaaa")
  const navigate = useNavigate();
  const location = useLocation();
  const [input, setInput] = useState("");
  console.log(input);
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

  ////////////////////////////////////////   hotels ...  /////////////////////////////
//   const handleCategoryClick = (category) => {
//     const filteredData = data.filter((item) => item.category === category);
//     navigate(/Userview, { state: { filteredData } }); 
//   };
//   <div className="text-wrapper-11" onClick={() => handleCategoryClick("Hotels")}>Hotels</div>
// <div className="text-wrapper-11" onClick={() => handleCategoryClick("Bars")}>Bars</div>
// <div className="text-wrapper-11" onClick={() => handleCategoryClick("Activities")}>Activities</div>
// <div className="text-wrapper-11" onClick={() => handleCategoryClick("Restaurants")}>Restaurants</div>
///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="home">
      <div className="div-2">
        <div>
          <div className="text-wrapper-7">Where to?</div>
          <div>
            <div className="text-wrapper-7">Where to?</div>
            <div className="search">
              <input type="text" placeholder="Search..." value={input} onChange={(event) => setInput(event.target.value)} className="search-input" />
              <button className="search-button" onClick={handleSearch}> Search </button>

            </div>
          </div>


        </div>
        {/* <div className="image-container">
  {data.map((e, i) => (
    <div className="image-card" key={i}>
      <img className="swiper-image" alt="Rectangle" src={e.images} />
    </div>
  ))}
</div> */}
        <Swiper spaceBetween={0} slidesPerView={2} style={{ width: "200%", height: "500" }}>
          {data.map((item, index) => (
            <SwiperSlide key={index} spaceBetween={0} slidesPerView={3}>
              <img src={item.images} alt={`Slide ${index}`} style={{ width: "80%", height: "520px", borderRadius: "14px", marginTop: "500px" }} />
            </SwiperSlide>
          ))}
        </Swiper>


        <div >
          <div className="text-wrapper-9" >Top things to Do</div>
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
          {/* <NavBar className="group-5" /> */}
        </div>




      </div>
    </div>
  );
};

export default Home;