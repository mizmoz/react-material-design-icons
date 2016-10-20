
import React, { PropTypes } from 'react';

const NearMe = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 6L6 21.07v1.97l13.67 5.3L24.97 42h1.97L42 6z"/>
    </svg>
  );
};

NearMe.defaultProps = {
  style: {},
  className: '',
};

NearMe.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NearMe;
