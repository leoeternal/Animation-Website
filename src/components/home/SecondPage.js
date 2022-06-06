import React, { useEffect } from "react";
import image1 from "../../static/images/image1.jpeg";
import image2 from "../../static/images/image2.jpeg";
import image3 from "../../static/images/image3.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./secondPage.css";
import { motion } from "framer-motion";

function SecondPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="second" className="secondpage-wrapper">
      <div data-aos="fade-up" data-aos-duration="1500" className="heading1">
        <p>OUR SERVICES</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className="heading2">
        <p>Here's what we offer</p>
      </div>
      <div className="card-container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="card"
        >
          <div className="image">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={image1}
              alt="second page"
            />
          </div>
          <div className="title">
            <p>360° YouTube Management</p>
          </div>
          <div className="desc">
            <p>
              We'll cover it all! From researching content ideas to publishing
              the videos and everything in between
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
          className="card"
        >
          <div className="image">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={image2}
              alt="second page"
            />
          </div>
          <div className="title">
            <p>Social Media Management</p>
          </div>
          <div className="desc">
            <p>
              We'll help in developing brand awareness and in strengthening
              engagement strategies to increase customer loyalty
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="linear"
          className="card"
        >
          <div className="image">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={image3}
              alt="second page"
            />
          </div>
          <div className="title">
            <p>Content Creation</p>
          </div>
          <div className="desc">
            <p>
              We'll curate innovative content like memes, short videos etc which
              will engage your audience and skyrocket your brand value
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
