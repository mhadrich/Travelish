import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../css/NavBar.css";


export const NavBar = (props) => {
  const { data, sorted } = props;
  const [sort,setSort] =useState('');
  console.log(sort);
  const navigate = useNavigate();
  const location = useLocation(); //! Get the current location
  //! Determine whether to show the full NavBar or just the logo
  const showFullNavBar =
    location.pathname !== "/SignIn" &&
    location.pathname !== "/CreateAccount" &&
    location.pathname !== "/";
    
  useEffect(()=>{
    if(sort==='restaurant'){
      sorted(data.filter((e)=>e.category.includes(sort)))
    } else if(sort==='hotel'){
      sorted(data.filter((e)=>e.category.includes(sort)))
    } else if(sort==='bar'){
      sorted(data.filter((e)=>e.category.includes(sort)))
    } else if(sort==='activity'){
      sorted(data.filter((e)=>e.category.includes(sort)))
    }
  },[sort])
  
  return (
    <div className="group">
      <div className="logo" onClick={() => navigate("/Home")}>
        <svg
          className="img"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
            fill="#ACF0FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 38.5401C30.2394 38.5401 38.5401 30.2394 38.5401 20C38.5401 9.76056 30.2394 1.45985 20 1.45985C9.76056 1.45985 1.45985 9.76056 1.45985 20C1.45985 30.2394 9.76056 38.5401 20 38.5401ZM20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="black"
          />
          <path
            d="M26.5693 20.584C26.5693 24.2121 23.6282 27.1533 20 27.1533C16.3719 27.1533 13.4307 24.2121 13.4307 20.584C13.4307 16.9558 16.3719 14.0146 20 14.0146C23.6282 14.0146 26.5693 16.9558 26.5693 20.584Z"
            fill="#FF9900"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 25.6935C22.8219 25.6935 25.1095 23.4059 25.1095 20.584C25.1095 17.7621 22.8219 15.4745 20 15.4745C17.1781 15.4745 14.8905 17.7621 14.8905 20.584C14.8905 23.4059 17.1781 25.6935 20 25.6935ZM20 27.1533C23.6282 27.1533 26.5693 24.2121 26.5693 20.584C26.5693 16.9558 23.6282 14.0146 20 14.0146C16.3719 14.0146 13.4307 16.9558 13.4307 20.584C13.4307 24.2121 16.3719 27.1533 20 27.1533Z"
            fill="black"
          />
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20H20H40Z"
            fill="#4E7E99"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 38.5401C29.7481 38.5401 37.7391 31.0169 38.4835 21.4599H1.51648C2.2609 31.0169 10.2519 38.5401 20 38.5401ZM0.0524666 21.4599C0.0176897 20.9778 0 20.491 0 20H40C40 20.491 39.9823 20.9778 39.9475 21.4599C39.1999 31.824 30.5547 40 20 40C9.44526 40 0.80012 31.824 0.0524666 21.4599Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.5402 25.6934L1.16791 25.6934L1.16791 24.5255L38.5402 24.5255L38.5402 25.6934Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.7883 30.2189L2.91968 30.2189L2.91968 29.343L36.7883 29.343L36.7883 30.2189Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.7007 34.7446L7.29926 34.7446L7.29926 34.1606L32.7007 34.1606L32.7007 34.7446Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.854 7.44531C20.2571 7.44531 20.5839 7.77211 20.5839 8.17524L20.5839 12.2628C20.5839 12.666 20.2571 12.9928 19.854 12.9928C19.4509 12.9928 19.1241 12.666 19.1241 12.2628L19.1241 8.17524C19.1241 7.77211 19.4509 7.44531 19.854 7.44531Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.99484 11.7467C10.2799 11.4616 10.7421 11.4616 11.0271 11.7467L13.9175 14.637C14.2025 14.9221 14.2025 15.3843 13.9175 15.6693C13.6324 15.9544 13.1703 15.9544 12.8852 15.6693L9.99484 12.779C9.70978 12.4939 9.70978 12.0317 9.99484 11.7467Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.0999 11.7466C29.385 12.0317 29.385 12.4938 29.0999 12.7789L26.2096 15.6692C25.9245 15.9543 25.4624 15.9543 25.1773 15.6692C24.8922 15.3842 24.8922 14.922 25.1773 14.637L28.0677 11.7466C28.3527 11.4616 28.8149 11.4616 29.0999 11.7466Z"
            fill="black"
          />
        </svg>

        <div className="text-wrapper">
          Travelish
        </div>
      </div>
      {showFullNavBar && (
        <div className="div">
          <Link to="/SearchResults" onClick={() => setSort('restaurant')}>
            <div className="text-wrapper-2">Restaurants</div>
          </Link>
          <Link to="/SearchResults" onClick={() => setSort('hotel')}>
            <div className="text-wrapper-3">Hotels</div>
          </Link>
          <Link to="/SearchResults" onClick={() => setSort('bar')}>
            <div className="text-wrapper-4">Bars</div>
          </Link>
          <Link to="/SearchResults" onClick={() => setSort('activity')}>
            <div className="text-wrapper-5">Activities</div>
          </Link>
        </div>
      )}
      {showFullNavBar && (
        <div className="sign-up">
          <div className="overlap-group">
            <div
              className="text-wrapper-6"
              onClick={() => navigate("/CreateAccount")}
            >
              Sign up
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;