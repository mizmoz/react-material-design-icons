
import React, { PropTypes } from 'react';

const DirectionsTransit = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C15.16 4 8 5 8 12v19c0 3.87 3.14 7 7 7l-3 3v1h24v-1l-3-3c3.87 0 7-3.13 7-7V12c0-7-7.16-8-16-8zm-9 30c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm7-12H12V12h10v10zm11 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12H26V12h10v10z"/>
    </svg>
  );
};

DirectionsTransit.defaultProps = {
  style: {},
  className: '',
};

DirectionsTransit.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DirectionsTransit;