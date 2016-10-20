
import React, { PropTypes } from 'react';

const ViewArray = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 36h6V10H8v26zm28-26v26h6V10h-6zM16 36h18V10H16v26z"/>
    </svg>
  );
};

ViewArray.defaultProps = {
  style: {},
  className: '',
};

ViewArray.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewArray;
