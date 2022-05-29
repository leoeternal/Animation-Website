import React from "react";
import Button from "@mui/material/Button";
import "./thirdPage.css";

function ThirdPage() {
  return (
    <div className="thirdpage-wrapper">
      <div className="thirdpage-container">
        <div className="heading1">
          <p>Get in touch</p>
        </div>
        <div className="heading2">
          <p>
            Want to know how we can help your brand stand out? Let's discuss!
          </p>
        </div>
        <div className="button">
          <Button size="large" variant="contained">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
