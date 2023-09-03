import React from "react";

import "../css/UserDetailView.css";

import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


const UserDetailView = (props) => {
  const {data, stars, review}=props
  const navigate = useNavigate();

// const [value, setValue] = React.useState(0);

const mystyle1 = {
  // width: "2",
  // height: "2",
  marginLeft: '-30px',
  style: "border:0;",
  allowfullscreen: "",
  loading: "lazy",
  referrerpolicy: "no-referrer-when-downgrade"
}

  return (
    <div className="user-business-view">
      <div className="div">
        <div className="group">

        </div>
        <div className="text-wrapper-8">{data.name}</div>
        <div className="group-2">
        <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',           
              }}           
            >
              <Rating
                name="hover-feedback"
                value={stars}
                emptyIcon={<StarIcon style={{ opacity: 0.2 }} fontSize="inherit" />}
                style={{pointerEvents:"none"}}
              />
            </Box>
        </div>
        <img className="rectangle" alt="Rectangle" src={data.images} />
        <div className="overlap-2">

          {review && review.map((e,i)=>{
            if(e.bussinessID===data.id){
              console.log(e.comments);
              return (
                  <p className={`comment${i}`}>{e.comments}</p>
              )
            }
          })}

          <div className="text-wrapper-10">Rating &amp; Reviews </div>
          <div className="group-3">
          <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',           
              }}           
            >
              <Rating
                name="hover-feedback"
                value={stars}
                emptyIcon={<StarIcon style={{ opacity: 0.2 }} fontSize="inherit" />}
                style={{pointerEvents:"none"}}
              />
            </Box>
          </div>
          <img className="vector" alt="Vector" src="vector-8.svg" />
          <div className="div-wrapper" onClick={() => { navigate("/NewComment") }} >
            <div className="text-wrapper-11">Write a Review</div>

          </div>
        </div>
        <div className="overlap-3">
          <p className="lorem-ipsum-dolor">{data.description}</p>
          <div className="text-wrapper-10">Description</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-10">Location &amp; contact</div>
          <div style={mystyle1}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51757.48343061744!2d10.6180544!3d35.82833455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275759ac9d10d%3A0x698e3915682cef7d!2sSousse!5e0!3m2!1sfr!2stn!4v1693647167528!5m2!1sfr!2stn" ></iframe>
          </div>          <div className="group-4">
            <div className="text-wrapper-12">{data.hours}</div>
            <img className="image" alt="Image" src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" />
          </div>
          <div className="group-wrapper">
            <div className="group-5">
              <div className="text-wrapper-13">{data.phone}</div>
              <img className="mask-group-2" alt="Mask group" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" />
            </div>
          </div>
          <div className="group-6">
            <p className="p">{data.adresse}</p>
            <img className="adress" alt="Image" src="https://w7.pngwing.com/pngs/561/324/png-transparent-location-address-position-linear-icon-location-address-position-thumbnail.png" />
          </div>
        </div>
        <div className="text-wrapper-14">Similar to this place</div>
        <div className="group-7">
          <div className="overlap-5">
            <div className="text-wrapper-15">Restaurants</div>
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-15">Hotels</div>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-15">Bars</div>
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-15">Activities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailView
