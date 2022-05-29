import React from "react";
import fifthpage from "../../static/images/fifthpage.png";
import video from "../../static/images/video.png";
import find from "../../static/images/find.png";
import videoediting from "../../static/images/videoediting.png";
import meme from "../../static/images/meme.png";
import heart from "../../static/images/heart.png";
import start from "../../static/images/start.png";
import "./fifthPage.css";

function FifthPage() {
  return (
    <div id="five" className="fifthpage-wrapper">
      <div data-aos="fade-up" data-aos-duration="1000" className="heading">
        <p>Here's why you should work with us</p>
      </div>
      <div className="fifthpage-container">
        <div data-aos="fade-right" data-aos-duration="1500" className="left">
          <img src={fifthpage} alt="Fifth Page" />
        </div>
        <div className="right">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="fifth-card"
          >
            <div className="image-container">
              <div className="image">
                <img src={video} alt="Fifth Page" />
              </div>
            </div>
            <div className="info">
              <div className="title">
                <p>Video Production</p>
              </div>
              <div className="desc">
                <p>
                  We'll record high quality videos that blends well with your
                  brand persona
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="fifth-card"
          >
            <div className="image-container">
              <div className="image">
                <img src={videoediting} alt="Fifth Page" />
              </div>
            </div>
            <div className="info">
              <div className="title">
                <p>Video Editing</p>
              </div>
              <div className="desc">
                <p>
                  We'll use animations and illustrations to create appealing
                  videos for your audience
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="fifth-card"
          >
            <div className="image-container">
              <div className="image">
                <img src={meme} alt="Fifth Page" />
              </div>
            </div>
            <div className="info">
              <div className="title">
                <p>Meme Creation</p>
              </div>
              <div className="desc">
                <p>
                  "In the 21st century, those who control the memes control the
                  universe". We'll help you express yourself through memes in
                  the most creative way possible!
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="fifth-card"
          >
            <div className="image-container">
              <div className="image">
                <img src={find} alt="Fifth Page" />
              </div>
            </div>
            <div className="info">
              <div className="title">
                <p>Content Research</p>
              </div>
              <div className="desc">
                <p>
                  There's no one size fits all. We'll help you discover valuable
                  content for your brand
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="fifth-card"
          >
            <div className="image-container">
              <div className="image">
                <img src={start} alt="Fifth Page" />
              </div>
            </div>
            <div className="info">
              <div className="title">
                <p>Graphic Designing</p>
              </div>
              <div className="desc">
                <p>
                  You may create the best video in the world, but without a
                  proper thumbnail strategy, it'll never perform upto its
                  potential
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="fifth-card"
          >
            <div className="image-container">
              <div className="image">
                <img src={heart} alt="Fifth Page" />
              </div>
            </div>
            <div className="info">
              <div className="title">
                <p>Social Media Campaigns</p>
              </div>
              <div className="desc">
                <p>
                  We'll help you grow your social media presence through videos,
                  graphics and memes along with collabs, advertisements and
                  influencer marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
