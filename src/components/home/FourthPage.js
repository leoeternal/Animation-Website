import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Aos from "aos";
import "aos/dist/aos.css";
// import person1 from "../../static/images/person1.png";
import person11 from "../../static/images/person11.png";
// import person2 from "../../static/images/person2.png";
import person22 from "../../static/images/person22.png";
import "./fourthPage.css";
import { motion } from "framer-motion";

function FourthPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="four" className="fourthpage-wrapper">
      <div className="fourthpage-container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="left-container"
        >
          <div className="left">
            <div className="heading1">
              <p>WHO WE ARE</p>
            </div>
            <div className="heading2">
              <p>
                We are a team of experienced creators who love creating content
              </p>
            </div>
            <div className="heading3">
              <p>
                We specialize in various forms of content creation, anything
                from video production to graphic design to creating creative
                memes that engage with the right audience.
              </p>
            </div>
            <div className="fourth-button">
              <Button size="large" variant="contained">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="right">
          <motion.div whileHover={{ scale: 1.1 }} className="fourth-card">
            <div className="image">
              <img src={person11} alt="fourth page" />
            </div>
            <div className="name">
              <p>Akshat Sachan</p>
            </div>
            <div className="position">
              <p>Co Founder</p>
            </div>
            <div className="about">
              <p>
                here are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="fourth-card">
            <div className="image">
              <img src={person22} alt="fourth page" />
            </div>
            <div className="name">
              <p>Nikhil Jindal</p>
            </div>
            <div className="position">
              <p>Co Founder</p>
            </div>
            <div className="about">
              <p>
                here are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
