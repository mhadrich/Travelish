import React from "react";
import "../css/NewComment.css";
import { useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const labels = {
  0: "",
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const NewComment = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  // const [newReview, setNewReview] = useState({
  //   comments : '',
  //   rating : '',
  //   adminID : 1,
  //   bussinessID : data.id
  // })
  console.log(rate, review);

  const handleChange = (e) => {
    setReview(e.target.value);
    setRate(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4004/review/createReview", {
      comments : review,
      rating : rate,
      adminID : 1,
      bussinessID : data.id})
      .then((response) => {
        navigate("/Home");
        window.location.reload(false);
        console.log("Successful add", response.data);
      })
      .catch((error) => console.log("Failed to add", error));
  };

  return (
    <div className="add-comment">
      <div className="div">
        <div className="group">
          <p className="tell-us-how-was-your">
            Tell us, how was
            <br />
            your visit?
          </p>
          <div className="vertical-line">
            <hr/>
            </div>
          <div className="selected-business">
            <div className="overlap-group">
              <img
                className="rectangle"
                alt="Rectangle"
                src={data.images}
              />
              <div className="text-wrapper">{data.name}</div>
              <p className="p">{data.adresse}</p>
            </div>
          </div>
          <img className="separator" alt="Separator" src="separator.svg" />
          <p className="text-wrapper-2">How would you rate your experience?</p>
          <div className="text-wrapper-3">Write a review</div>
          <div className="group-2">
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
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
                emptyIcon={
                  <StarIcon style={{ opacity: 0.2 }} fontSize="inherit" />
                }
              />
            </Box>
          </div>
          <textarea className="rectangle-2" onChange={(e) => handleChange(e)} />
        </div>
        <div className="buttonPlace">
          <button
            className="button"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
