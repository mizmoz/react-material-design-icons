
import React, { PropTypes } from 'react';

const Details = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 8l18 32L42 8H6zm6.75 4h22.5L24 32 12.75 12z"/>
    </svg>
  );
};

Details.defaultProps = {
  style: {},
  className: '',
};

Details.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Details;
