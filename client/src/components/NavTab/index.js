import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function NavTab({ currentPage, handlePageChange }) {
  return (
    <div className='nav-container'>
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <Link
          to="/"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/notifications"
          onClick={() => handlePageChange('Notifications')}
          className={currentPage === 'Notifications' ? 'nav-link active' : 'nav-link'}
        >
          Notifications
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Us
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Log in or Sign Up
        </Link>
      </li>
    </ul>
    </div >
  );
}

export default NavTab;
