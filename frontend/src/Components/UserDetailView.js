import React from "react";
import "../css/UserDetailView.css";

export const UserDetailView = () => {
  return (
    <div className="user-business-view">
      <div className="div">
        <div className="group">
          <div className="logo">
            <img className="img" alt="Group" src="group-2.png" />
            <div className="text-wrapper">Travelish</div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-2">Restaurants</div>
            <div className="text-wrapper-3">Hotels</div>
            <div className="text-wrapper-4">Bars</div>
            <div className="text-wrapper-5">Activities</div>
          </div>
          <div className="sign-in">
            <div className="overlap">
              <div className="text-wrapper-6">username</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="text-wrapper-7">Sign in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-8">Steak House</div>
        <div className="group-2">
          <div className="text-wrapper-9">70 reviews</div>
          <img className="star" alt="Star" src="star-1.svg" />
          <img className="star-2" alt="Star" src="star-2.svg" />
          <img className="star-3" alt="Star" src="star-3.svg" />
          <img className="star-4" alt="Star" src="star-4.svg" />
          <img className="star-5" alt="Star" src="star-5.svg" />
        </div>
        <img className="rectangle" alt="Rectangle" src="rectangle-16.png" />
        <div className="overlap-2">
          <p className="there-aren-t-enough">
            There aren’t enough food, service, value or
            <br />
            atmosphere ratings for Steak House yet.
            <br />
            Be one of the first to write a review!
          </p>
          <div className="text-wrapper-10">Rating &amp; Reviews</div>
          <div className="group-3">
            <div className="text-wrapper-9">70 reviews</div>
            <img className="star" alt="Star" src="image.svg" />
            <img className="star-2" alt="Star" src="star-2-2.svg" />
            <img className="star-3" alt="Star" src="star-3-2.svg" />
            <img className="star-4" alt="Star" src="star-4-2.svg" />
            <img className="star-5" alt="Star" src="star-5-2.svg" />
          </div>
          <img className="vector" alt="Vector" src="vector-8.svg" />
          <div className="div-wrapper">
            <div className="text-wrapper-11">Write a Review</div>
          </div>
        </div>
        <div className="overlap-3">
          <p className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Risus sociis a quam sed ultricies enim.
            <br />
            Elementum posuere eget condimentum
            <br />
            nam sodales nunc a massa elementum.
            <br />
            Malesuada placerat tortor pharetra sit morbi
            <br />
            turpis massa arcu orci. Est risus vitae
            <br />
            condimentum velit.
          </p>
          <div className="text-wrapper-10">Description</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-10">Location &amp; contact</div>
          <img className="mask-group" alt="Mask group" src="mask-group.png" />
          <div className="group-4">
            <div className="text-wrapper-12">16:00 - 03:00</div>
            <img className="image" alt="Image" src="image-5.png" />
          </div>
          <div className="group-wrapper">
            <div className="group-5">
              <div className="text-wrapper-13">55555555</div>
              <img className="mask-group-2" alt="Mask group" src="image.png" />
            </div>
          </div>
          <div className="group-6">
            <p className="p">14 Rue de Liberté, Tunis</p>
            <img className="image" alt="Image" src="image-7.png" />
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
