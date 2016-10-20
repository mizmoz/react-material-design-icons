
import React, { PropTypes } from 'react';

const LaptopChromebook = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44 36V6H4v30H0v4h48v-4h-4zm-16 0h-8v-2h8v2zm12-6H8V10h32v20z"/>
    </svg>
  );
};

LaptopChromebook.defaultProps = {
  style: {},
  className: '',
};

LaptopChromebook.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LaptopChromebook;
