import React from "react";
import "../css/Header.css";
import Navbar from "./Navbar";
import video from "../video/gymmotivation.mp4";
import { Link } from "react-router-dom";
import ScrollButton from "./ScrollButton";

function Header() {
  return (
    <div className="header">
      <div dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video}"
          id="video"
        />,
      ` }}></div>
      {/* <video src={video} autoPlay loop muted id="video"></video> */}
      <div className="videocontent">
        <div className="header__text">
          <Navbar id="mainpagenav" />
          <h1>
            Fitness <span className="header__colorText">With</span>Naveen
          </h1>
        </div>
        <div className="header__button">
          <Link to="/contact">
            <button>Join Now</button>
          </Link>
        </div>
      </div>
      <ScrollButton/>
    </div>
  );
}

export default Header;
