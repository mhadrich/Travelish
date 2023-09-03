import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate, Link } from "react-router-dom";
import "../css/Home.css";
import "swiper/css";
const Home = (props) => {
  const { data, sorted } = props;
  const [sort,setSort] =useState('');
  const [placeholder, setPlaceholder] = useState('Search...')
  const navigate = useNavigate();

  useEffect(()=>{
    if(sort==='restaurant'){
      sorted(data.filter((e)=>e.category===sort))
    } else if(sort==='hotel'){
      sorted(data.filter((e)=>e.category===sort))
    } else if(sort==='bar'){
      sorted(data.filter((e)=>e.category===sort))
    } else if(sort==='activity'){
      sorted(data.filter((e)=>e.category===sort))
    } else {
      sorted(data.filter((e)=>e.name.toLowerCase().includes(sort.toLowerCase())))
    }
  },[sort])

  const handleSearch = () => {
    if(sort===''){
      setPlaceholder('Please define your search...')
    } else {
      navigate('/SearchResults')
    }
  };

  return (
    <div className="home">
      <div className="div-2">
        <div>
          <div className="text-wrapper-7">Where to?</div>
          <div>
            <div className="text-wrapper-7">Where to?</div>
            <div className="search">
              <input
                type="text"
                placeholder={placeholder}
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="search-input"
              />
              <button className="search-button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        <Swiper
          speed={1600}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          style={{ width: "100%", height: "500", zIndex: 1 }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} spaceBetween={0} slidesPerView={3}>
              <img
                src={item.images}
                alt={`Slide ${index}`}
                style={{
                  width: "80%",
                  height: "520px",
                  borderRadius: "14px",
                  marginTop: "500px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="text-wrapper-9">Top things to Do</div>
          <div className="text-wrapper-10">Traveler’s Choice</div>
          <div className="group-2">
          <Link to="/SearchResults" onClick={() => setSort('restaurant')}>
            <div className="overlap">
              <div className="text-wrapper-11">Restaurants</div>
            </div>
          </Link>
          <Link to="/SearchResults" onClick={() => setSort('hotel')}>
            <div className="overlap-2">
              <div className="text-wrapper-11">Hotels</div>
            </div>
          </Link>
          <Link to="/SearchResults" onClick={() => setSort('bar')}>
            <div className="overlap-3">
              <div className="text-wrapper-11">Bars</div>
            </div>
          </Link>
          <Link to="/SearchResults" onClick={() => setSort('activity')}>
            <div className="overlap-4">
              <div className="text-wrapper-11">Activities</div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
