import React from "react";
import "../styles/Terms.css";
import lamp1 from "../Images/LeftLamp.png";
import reel1 from "../Images/LeftReel.png";
import reel2 from "../Images/RightReel.png";
import lamp2 from "../Images/RightLamp.png";

export default function Terms() {
  return (
    <>
      <div className="main-container">
        <div className="terms-container">
          <div className="terms-left">
            <img className="side-reel1" src={reel1} alt="" />
          </div>
          <div className="terms-content">
            <h3>Terms & Conditions:</h3>
            <p>
              In case there is any discrepancy found in terms of fake users
              being created, the filmmaker will be disqualified. Films
              showcasing pornography, hurting religious sentiments, or inciting
              communal conflict will not be allowed. There is no restriction on
              the number of films that a filmmaker can upload/enter for the
              challenge. <br /> The uploaded films will undergo review and will
              go live for the audience on 25th July 2023 at 9 am. The winner
              will be announced through social media and website on 15th
              September 2023. Once the winner announcement is done, the winner
              will have to mail the bank details along with a cancelled cheque
              and pan card to support@abctalkies.com within the next 5 days. The
              amount after deduction of taxes as applicable shall be credited to
              the winner’s account by 5th October 2023 subject to ABC Talkies
              receiving all the details mentioned in Point No. 10 above latest
              by 20th September 2023. In case of a tie, the prize money will be
              equally split between the winners.{" "}
              <span style={{ color: "#1ca48c" }}>
                ABC Talkies Pvt. Limited reserves all rights.
              </span>
            </p>
          </div>
          <div className="terms-right">
            <img className="side-reel2" src={reel2} alt="reel2" />
          </div>
        </div>
        <div className="terms-container2">
          <div className="terms-left">
            <img className="side-lamp1" src={lamp1} alt="left-lamp" />
          </div>
          <div className="terms-content2">
            <h3>What’s in it for the Filmmakers:</h3>
            <p>
              <span>A platform to showcase your work.</span> <br /> A <span>chance to monetize your work.</span>
              You decide your own ticket price and you start earning from the
              first view itself. <br /> In addition to the revenue from ticket sales,
              <span>Cash Prizes worth Rs 1,00,000 to be won!</span> <br />  A real-time dashboard to
              track progress of your ticket sales. <br /> <span>The Biggest Intangible
              Benefit: As a young filmmaker, if you have a film that has done
              good ticket sales on a platform,</span> wouldn’t <br /> it work wonders for you
              when you go to a producer or a director to showcase your work? <br /> You
              will suddenly be looked at as a commercially viable filmmaker. <br /> <span>It
              makes all the difference!</span> <br /> Other benefits of uploading the films on
              ABC Talkies can be checked here: &nbsp;
              <span>https://abctalkies.com/app/iamfilmmaker</span>
            </p>
          </div>
          <div className="terms-right">
            <img className="side-lamp2" src={lamp2} alt="right-lamp" />
          </div>
        </div>
      </div>
    </>
  );
}