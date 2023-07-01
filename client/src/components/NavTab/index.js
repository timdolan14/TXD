import React from 'react';


function NavBar ({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills nav-justified">
      <li className="nav-item">
        <a
          href="#Home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#profile"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#notifications"
          onClick={() => handlePageChange('Notifications')}
          className={currentPage === 'Notifications' ? 'nav-link active' : 'nav-link'}
        >
          Notifications
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Us
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Log in or Sign Up
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
