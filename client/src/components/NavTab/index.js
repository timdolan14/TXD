import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function NavTab() {
  return (
    <div className='nav-container'>
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <Link
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/notifications"
        >
          Notifications
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
        >
          Contact Us
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
        >
          Log in or Sign Up
        </Link>
      </li>
    </ul>
    </div >
  );
}

export default NavTab;
