
import React, { PropTypes } from 'react';

const PinDrop = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 16c0-6.63-5.37-12-12-12S12 9.37 12 16c0 9 12 22 12 22s12-13 12-22zm-16 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zM10 40v4h28v-4H10z"/>
    </svg>
  );
};

PinDrop.defaultProps = {
  style: {},
  className: '',
};

PinDrop.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PinDrop;
