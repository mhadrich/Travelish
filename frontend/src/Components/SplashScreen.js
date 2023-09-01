import React, { useEffect } from "react";
import '../css/SplashScreen.css'
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();
  const timer = 2000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/Home');
    }, timer);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="splash">
      <img src="https://res.cloudinary.com/dkago8t99/image/upload/v1693586271/Travelish_bgoueb.gif" alt="Splash" />
    </div>
  );
}

export default SplashScreen;
