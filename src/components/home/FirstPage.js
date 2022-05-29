import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import firstPageImage from "../../static/images/firstPageImage.jpeg";
import "./firstPage.css";

function FirstPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="first" className="firstpage-wrapper">
      <div className="left">
        <div data-aos="fade-up" data-aos-duration="1500" className="title1">
          <p>Creating content that captures attention</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="title2">
          <p>
            We help brands grow by unleashing the potential of social media 🚀
          </p>
        </div>
        <div className="button">
          <Button size="large" variant="contained">
            Learn how
          </Button>
        </div>
      </div>
      <div className="right">
        <img
          data-aos="zoom-out"
          data-aos-duration="1500"
          alt="first page"
          src={firstPageImage}
        />
      </div>
    </div>
  );
}

export default FirstPage;
