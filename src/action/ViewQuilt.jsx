
import React, { PropTypes } from 'react';

const ViewQuilt = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 36h10V24H20v12zM8 36h10V10H8v26zm24 0h10V24H32v12zM20 10v12h22V10H20z"/>
    </svg>
  );
};

ViewQuilt.defaultProps = {
  style: {},
  className: '',
};

ViewQuilt.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewQuilt;
