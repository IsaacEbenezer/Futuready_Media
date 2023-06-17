import React from "react";
import "../styles/Modus.css";
import boat from "../Images/BoatIcon.png";
import tree2 from "../Images/RightTree.png";
import dance from "../Images/DancerIcon.png";
import ticket from "../Images/TicketIcon.png";
import tree1 from "../Images/ReelLeftTree.png";
import clock from "../Images/ClockIcon.png";
import calender from "../Images/CalendarIcon.png";
import temple from "../Images/TempleIcon.png";
import rupee from "../Images/RupeeIcon.png";
import cameraicon from "../Images/CameraIcon.png";
import language from "../Images/LanguageIcon.png";
import subtitle from "../Images/SubtitleIcon.png";
import mask from "../Images/DramaMaskIcon.png";



export default function Modus() {
  return (
    <>
      <div className="modus-container">
        <div className="modus-header">
          <img src={tree1} alt="left-tree" />
          <h3>
            The modus operandi is very simple <br /> for any filmmaker to follow
          </h3>
        </div>
        <div className="reel-container1">
          <img className="reel-image" src={temple} alt="right-tree" />
          <div className="modus-card">
            <img src={calender} alt="calender" />
            <div className="card-content">
              <span>Short Film Submission Period:</span>
              <small>
                15th June 2022 to <br /> 20th July 2023
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={clock} alt="clock" />
            <div className="card-content">
              <span>Allowed Film Duration:</span>
              <small>
                5 minutes to <br /> 25 minutes
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={language} alt="language" />
            <div className="card-content">
              <span>Language of the film:</span>
              <small>Malayalam</small>
            </div>
          </div>
          <div className="modus-card">
            <img src={subtitle} alt="subtitle" />
            <div className="card-content">
              <span>Sub-Title:</span>
              <small>
                English <br /> (Cumpulsory)
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={mask} alt="mask" />
            <div className="card-content">
              <span>Genre:</span>
              <small>Any</small>
            </div>
          </div>
          <img className="reel-image" src={tree2} alt="right-tree" />
        </div>
        <div className="reel-container1">
          <img className="boat-image" src={boat} alt="boat-icon" />
          <div className="modus-card">
            <img src={ticket} alt="ticket-icon" />
            <div className="card-content">
              <span>Short Film Submission Period:</span>
              <small>
                15th June 2022 to <br /> 20th July 2023
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={rupee} alt="rupee-icon" />
            <div className="card-content">
              <span>Allowed Film Duration:</span>
              <small>
                5 minutes to <br /> 25 minutes
              </small>
            </div>
          </div>
          <div className="modus-card">
            <img src={cameraicon} alt="camera-icon" />
            <div className="card-content">
              <span>Language of the film:</span>
              <small>Malayalam</small>
            </div>
          </div>
          
          <img className="dance-image" src={dance} alt="dance-icon" />
        </div>
      </div>
    </>
  );
}