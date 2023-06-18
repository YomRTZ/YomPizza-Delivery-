import React from "react";
import "./footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
function footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <YouTubeIcon /> <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
      <p> &copy; 2023 yomepizza.com . All rights reserved. </p>
    </div>
  );
}

export default footer;
