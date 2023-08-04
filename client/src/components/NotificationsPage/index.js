import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './style.css';

const NotificationPage = () => {
  const notifications = [
    {
      id: 1,
      message: 'You have a new follower',
      time: '2 hours ago',
    },
    {
      id: 2,
      message: 'Your post received a like',
      time: '4 hours ago',
    },
    {
      id: 3,
      message: 'Your post received a comment',
      time: '1 day ago',
    },
  ];

  return (
    <div className="notification-page">
      {Auth.loggedIn() ? (
        <>
          <div>
            <h2 className="notification-page-heading">Notifications</h2>
            {notifications.length > 0 ? (
              <ul className="notification-list">
                {notifications.map(notification => (
                  <li key={notification.id} className="notification-item">
                    <div className="notification-info">
                      <p className="notification-message">{notification.message}</p>
                      <p className="notification-time">{notification.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="notification-empty">No new notifications</p>
            )}
          </div>
        </>
      ) : (
        <p notification-login>
          You need to be logged in to view your notifications. Please <Link to="/login">Login</Link> or <Link to="/register">Sign Up.</Link>
        </p>
      )}
    </div>
  );
};

export default NotificationPage;
