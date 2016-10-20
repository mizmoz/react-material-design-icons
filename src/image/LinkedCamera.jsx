
import React, { PropTypes } from 'react';

const LinkedCamera = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 6.66c5.16 0 9.34 4.18 9.34 9.34H44c0-6.62-5.38-12-12-12v2.66M32 12c2.22 0 4 1.78 4 4h2.66c0-3.68-2.98-6.66-6.66-6.66V12"/>
    </svg>
  );
};

LinkedCamera.defaultProps = {
  style: {},
  className: '',
};

LinkedCamera.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LinkedCamera;
