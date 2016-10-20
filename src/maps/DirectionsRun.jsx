
import React, { PropTypes } from 'react';

const DirectionsRun = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M27 9c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-7.2 27.8l1.9-8.8 4.3 4v12h4V28.9l-4.1-4.1 1.2-6C29.7 22 33.6 24 38 24v-4c-3.7 0-6.9-2-8.7-4.9l-1.9-3.2c-.7-1.2-2-1.9-3.4-1.9-.5 0-1 .1-1.5.3L12 14.6V24h4v-6.7l3.5-1.4L16.4 32l-9.8-1.9-.8 3.9s14 2.7 14 2.8z"/>
    </svg>
  );
};

DirectionsRun.defaultProps = {
  style: {},
  className: '',
};

DirectionsRun.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DirectionsRun;
