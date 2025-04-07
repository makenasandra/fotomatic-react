import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Page not found</p>
      <a href="/" className="notfound-link">Go back home</a>
    </div>
  );
};

export default NotFound;
