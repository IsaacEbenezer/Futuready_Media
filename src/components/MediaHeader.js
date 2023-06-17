
import React from "react";
import "../styles/MediaHeader.css";
import logo1 from "../Images/BigShortsLogo.png";
import logo2 from "../Images/MalayalamEdition.png";
import logo3 from "../Images/LeftLogoTree.png";
import logo4 from "../Images/WaterEffect.png";

export default function MediaHeader() {
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <img className="side-logo1" src={logo3} alt="" />
          <img className="water-effect" src={logo4} alt="water-effect" />
        
        </div>
        <div className="middle-content">
          <div className="logo-container">
            <img className="logo1" src={logo1} alt="BigShortsLogo" />
            <img className="logo2" src={logo2} alt="MalayalamEdition" />
          </div>
          <div className="header-content">
            <h2>Ignite Your Filmmaking Dreams!</h2>
            <small style={{ display: "block" }}>
              Do you have a knack for creating beautiful cinematicmexperience?
            </small>
            <span>
              Promote your film and contest on your Social Media platforms from
              25th July to 31th Aug
            </span>
            <h3>Grab the chance to win an amazing</h3>
            <span style={{ color: "#27a590" }}>
              cash prize worth Rs 1,00,000/-
            </span>
          </div>
        </div>
        <div className="header-right">
          <img
            className="side-logo2"
            style={{ transform: "scaleX(-1)" }}
            src={logo3}
            alt=""
          />
          <img className="water-effect" src={logo4} alt="water-effect" />
        </div>
      </div>
    </>
  );
}