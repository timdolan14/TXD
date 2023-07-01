import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import './style.css'

function Footer() {
  return (
    <footer className="footer">
        <p>Made by Tim Dolan</p>
        <ul>
          <a href="https://www.linkedin.com/in/timothy-dolan-kb1417433214/"><BsLinkedin />
          </a>
        </ul>
        <ul>
          <a href="https://github.com/timdolan14"><BsGithub /></a>
        </ul>
        <ul>
          <a href="https://twitter.com/timmydolan14"><BsTwitter /></a>
        </ul>
    </footer>
  );
}
export default Footer;