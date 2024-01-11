import React, { useState } from "react";
import landingpageImage from "../../../assets/images/LandingPage1.png";
import "./flip-style.css";

const Flip = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <div style={{ minWidth: "79%" }}>
        <div className="flip-main-container">
          <div className={`flip-box ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src={landingpageImage}
                  alt="Paris"
                  style={{
                    width: "700px",
                    height: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </div>
              <div
                className="flip-box-back"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <h2>Red</h2>
                </div>
                <div>
                  <p>An apple a day keeps doctor away</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "white",
            padding: "20px 0px 70px 0px",
            color: "green",
          }}
        >
          <h2>what's a color of Apple??</h2>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "80%" }}
        >
          <button style={{ padding: "10px" }} onClick={handleFlip}>
            Flip
          </button>
        </div>
      </div>
    </>
  );
};

export default Flip;
