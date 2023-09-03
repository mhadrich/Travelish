import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/SearchResults.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const SearchResults = (props) => {
  const { data, review, select, rate } = props;
  const navigate = useNavigate();

  return (
    <div className="user-view">
      <div className="div">
        {data &&
          data.map((e, i) => {
            var stars = 0;
            var totalRvw = 0;
            var totalRate = 0;
            review.map((r) => {
              if (r.bussinessID === e.id) {
                totalRvw += 1;
                totalRate += r.rating;
              }
            });
            stars = totalRate / totalRvw;
            return (
              <div
                key={i}
                className={`result${i}`}
                onClick={() => {
                  select(e);
                  rate(stars);
                  navigate("/UserDetailView");
                }}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)),url(${e.images})`,
                }}
              >
                <div className="business-name">{e.name}</div>
                <div className="group">
                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={stars}
                      emptyIcon={
                        <StarIcon style={{ opacity: 0.2 }} />
                      }
                      style={{ pointerEvents: "none" }}
                    />
                  </Box>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchResults;
