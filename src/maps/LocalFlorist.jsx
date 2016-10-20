
import React, { PropTypes } from 'react';

const LocalFlorist = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 44c9.94 0 18-8.06 18-18-9.94 0-18 8.06-18 18zM11.21 20.5c0 2.76 2.24 5 5 5 1.05 0 2.03-.33 2.83-.88L19 25c0 2.76 2.24 5 5 5s5-2.24 5-5l-.04-.38c.81.56 1.78.88 2.83.88 2.76 0 5-2.24 5-5 0-1.99-1.17-3.7-2.86-4.5 1.68-.8 2.86-2.51 2.86-4.5 0-2.76-2.24-5-5-5-1.05 0-2.03.33-2.83.88L29 7c0-2.76-2.24-5-5-5s-5 2.24-5 5l.04.38c-.81-.56-1.78-.88-2.83-.88-2.76 0-5 2.24-5 5 0 1.99 1.17 3.7 2.86 4.5-1.69.8-2.86 2.51-2.86 4.5zM24 11c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zM6 26c0 9.94 8.06 18 18 18 0-9.94-8.06-18-18-18z"/>
    </svg>
  );
};

LocalFlorist.defaultProps = {
  style: {},
  className: '',
};

LocalFlorist.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalFlorist;
