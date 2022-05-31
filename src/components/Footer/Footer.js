import React from "react";
import Container from "../Container/Container";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

function Footer() {
  return (
    <section className='footer'>
      <Container className='footer-cont'>
        <div className='social-icons'>
          <div className='icon'>
            <TwitterIcon className='soc-icon twitter' />
          </div>
          <div className='icon'>
            <YouTubeIcon className='soc-icon youtube' />
          </div>
          <div className='icon'>
            <FacebookRoundedIcon className='soc-icon facebook' />
          </div>
        </div>
        <div className='terms'>
          <p>Read Our Terms & Conditions</p>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
