/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./landing.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { useEffect } from "react";

const Landing = () => {
  const [displayText, setDisplayText] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplayText(true), 700);
  });
  return (
    <div className="landing-root">
      <div className="container">
        <img src={logo} className="landing-logo" />
        <p className={displayText ? "landing-logo-text" : "no-disp"}>rtsy</p>
      </div>
    </div>
  );
};

export default Landing;
