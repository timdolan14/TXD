import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Made by Tim Dolan</p>
      <div className="icons-container">
        <ul>
          <a href="https://www.linkedin.com/in/timothy-dolan-kb1417433214/">
            <BsLinkedin size={24} />
          </a>
        </ul>
        <ul>
          <a href="https://github.com/timdolan14">
            <BsGithub size={24} />
          </a>
        </ul>
        <ul>
          <a href="https://twitter.com/timmydolan14">
            <BsTwitter size={24} />
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
