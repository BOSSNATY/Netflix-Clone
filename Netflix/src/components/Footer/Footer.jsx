import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red, pink } from "@mui/material/colors";

function Footer() {
  return (
    <div className="container outer-container">
      <div className="align-items-center  justify-content-center d-flex justify-content-evenly ">
        <FacebookIcon color="primary" />
        <InstagramIcon sx={{ color: pink[600] }} />
        <YouTubeIcon sx={{ color: red[500] }} />
      </div>
      <br />
      <div className="text-secondary middle-container">
        <div className="align-items-center d-flex justify-content-evenly ">
          <ul className="align-items-center ">
            <li>Audio Description</li>
            <li>Investor Relation</li>
            <li>Legal Notice</li>
          </ul>
          <ul className="align-items-center">
            <li>Help Center</li>
            <li>jobs</li>
            <li>cookie Preferences</li>
          </ul>
          <ul className="align-items-center">
            <li>Gift Code</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul className="align-items-center ">
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>&copy; 1997-2025 Netflix, Inc.</div>
      </div>
      <br />
    </div>
  );
}

export default Footer;
