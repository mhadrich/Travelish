import React from "react";
import "../css/NewComment.css";
import { useState } from 'react';
import axios from "axios";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0: '',
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



const NewComment = (props) => {


const obj = props.data


  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);



  const [rate, setRate] = useState(0)
  const [review, setReview] = useState('')


  const handleChange = (e) => {
    setReview(e.target.value)
    setRate(value)
  }
  const handleClick = () => {
    axios.post("//////", { rating: rate, comments: review, adminID: obj.adminID , bussinessID: obj.bussinessID }).then((result) => console.log(result)).catch(err => console.log(err))
  }


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
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.2 }} fontSize="inherit" />}
              />
            </Box>
          </div>
          <textarea className="rectangle-2" onChange={(e) => handleChange(e)} />
        </div>
        <div className="buttonPlace">
          <button className="button" onClick={() => {
            handleClick()
            alert("added  succesfully")
          }} >Submit</button>
        </div>
      </div>
    </div>

  );
};


export default NewComment
