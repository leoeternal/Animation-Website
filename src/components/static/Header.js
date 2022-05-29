import React, { useState } from "react";
// import Button from "@mui/material/Button";
import logo from "../../static/images/logo.jpeg";
import "./header.css";

function Header() {
  const [navbar, setNavbar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  return (
    <div className={navbar ? "header-wrapper active" : "header-wrapper"}>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="company logo"></img>
        </div>
        <div className="title">
          <p>MarkitUp</p>
        </div>
      </div>
      {/* <div className="links">
        <div className="link">
          <a href="#first">
            <p>Home</p>
          </a>
        </div>
        <div className="link">
          <a href="#second">
            <p>Our Services</p>
          </a>
        </div>
        <div className="link">
          <a href="#four">
            <p style={{ position: "relative", left: "10px" }}>About</p>
          </a>
        </div>

        <div className="link">
          <a href="#five">
            <p>Work</p>
          </a>
        </div>

        <div className="link">
          <Button size="small" variant="contained">
            Contact Us
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
