import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../static/images/logo.jpeg";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import "./header.css";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <div className="links">
        <div className="link">
          <a href="#first">
            <p>Home</p>
          </a>
        </div>
        <div className="link">
          <a href="#second">
            <p style={{ textAlign: "center" }}>Our Services</p>
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
      </div>
      <div className="button">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <DensityMediumIcon style={{ color: "black" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <a style={{ textDecoration: "none", color: "black" }} href="#first">
              Home
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="#second"
            >
              Our Services
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a style={{ textDecoration: "none", color: "black" }} href="#four">
              About
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a style={{ textDecoration: "none", color: "black" }} href="#five">
              Work
            </a>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
