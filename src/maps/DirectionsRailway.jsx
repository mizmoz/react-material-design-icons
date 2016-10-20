
import React, { PropTypes } from 'react';

const DirectionsRailway = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 31c0 3.87 3.14 7 7 7l-3 3v1h24v-1l-3-3c3.87 0 7-3.13 7-7V10c0-7-7.16-8-16-8S8 3 8 10v21zm16 3c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm12-14H12V10h24v10z"/>
    </svg>
  );
};

DirectionsRailway.defaultProps = {
  style: {},
  className: '',
};

DirectionsRailway.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DirectionsRailway;
