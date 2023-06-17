import React from "react";
import "../styles/TimeLinesAndDetails.css";
import logo7 from "../Images/DirectorChair.png";

export default function TimelinesAndDetails() {
  return (
    <div className="details-container">
      <div>
        <h3
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: "10px",
          }}
        >
          Important Details & Timelines
        </h3>
      </div>
      <div className="details-content">
        <div className="details-left">
          <h5 style={{ color: "#1ca48c", textAlign: "start" }}>
            The spotlight shifts to God’s Own Country – Kerala!
          </h5>
          <p style={{ textAlign: "justify" }}>
          1. Short Film Submission Period: <span >15th June 2022 to 20th July 2023</span> <br /> 2.
            Allowed Film Duration: <span >5 minutes to 25 minutes</span> <br /> 3. Language of the
            film: <span >Malayalam </span><br /> 4. Sub-titles: <span>English (Compulsory)</span> <br /> 5. Genre: Any <br /> 6.
            <span >The minimum ticket price</span> that a filmmaker can fix including all
            charges and taxes <span >cannot be below Rs. 10</span>. Filmmakers will be paid
            their <span >per-ticket revenue for every ticket sold</span> irrespective of
            whether they win the prize or not. <br /> 7. While submitting the film, the
            filmmaker will have to tick the box saying that this film is for The
            Big Shorts Challenge (Malayalam Edition). <br /> 8. Last date of
            Submission: <span >20th July,2023</span> <br /> 9. It isspan
            mandatory to upload the poster
            and either the teaser or the trailer of the film along with the
            film. <br /> 10. Filmmakers are required to <span>promote the film and contest on
            their social media handles.</span> <br /> 11. Film with maximum unique tickets
            sold between <span>25th July 2023 to 31st August 2023</span> will be declared the
            Most Watched Film and will win a <span>cash prize of Rs 50,000 (statutory
            taxes to be deducted)</span>. No. of tickets sold for the contest winner
            calculation will be on unique viewers’ basis. For example, <span>if a
            viewer “X” purchases 3 tickets of the same film, it will be
            calculated as only 1 ticket sold for the contest calculation
            purpose.</span> <br /> 12. Film with highest earnings between <span>25th July 2023 to
            31st August 2023</span> will be declared the <span>Highest Grossing Film and will
            win a cash prize of Rs 50,000</span> (statutory taxes to be deducted). This
            will be done using the formula: Number of Tickets Sold X Ticket
            Price.<br /> 13. Minimum tickets to be sold for qualification for <span>Most
            Watched Film Prize: 1000 (unique viewers as mentioned in point no.
            11)</span>. <br /> 14. <span>Minimum Earnings required to qualify for the Highest
            Grossing Film prize is Rs 20,000</span>  (as per the formula mentioned in
            point no. 12).
          </p>
        </div>
        <div className="details-right">
          <img className="camera" src={logo7} alt="direcot-chair" />
        </div>
      </div>
    </div>
  );
}