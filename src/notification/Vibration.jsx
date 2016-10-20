
import React, { PropTypes } from 'react';

const Vibration = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M0 30h4V18H0v12zm6 4h4V14H6v20zm38-16v12h4V18h-4zm-6 16h4V14h-4v20zM33 6H15c-1.66 0-3 1.34-3 3v30c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3zm-1 32H16V10h16v28z"/>
    </svg>
  );
};

Vibration.defaultProps = {
  style: {},
  className: '',
};

Vibration.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Vibration;
