
import React, { PropTypes } from 'react';

const PersonPinCircle = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 20c-3.34 0-6.27-1.71-8-4.29.03-2.65 5.34-4.11 8-4.11s7.96 1.46 8 4.11C30.27 26.29 27.34 28 24 28z"/>
    </svg>
  );
};

PersonPinCircle.defaultProps = {
  style: {},
  className: '',
};

PersonPinCircle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PersonPinCircle;