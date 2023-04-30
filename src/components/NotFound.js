import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
}

export default NotFound;
