import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './style.css';

function NavTab() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="nav-container">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <div>
            {Auth.loggedIn() ? (
              <>
               <Link to="/profile" className="nav-link"> {Auth.getProfile().data.username}</Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="nav-link">Profile</Link>
              </>
            )}
          </div>
        </li>
        <li className="nav-item">
          <Link to="/notifications" className="nav-link">Notifications</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
          <div>
            {Auth.loggedIn() ? (
              <>
                <button className="nav-item logout-btn" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">Log in or Sign Up</Link>
              </>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavTab;
