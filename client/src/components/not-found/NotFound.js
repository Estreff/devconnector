import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1 className="display-">Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist</p>
      <Link to="/profiles" className="text-info">
        Back to Profiles
      </Link>
    </div>
  );
};
