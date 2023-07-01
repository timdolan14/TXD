import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


function NavTab() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

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
          <div>
            {Auth.loggedIn() ? (
              <>
                <button className="nav-item" onClick={logout}>Hey there, {Auth.getProfile().data.username}!</button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                >
                  Log in or Sign Up
                </Link>
              </>
            )}
          </div>

        </li>
      </ul>
    </div >
  );
}

export default NavTab;
