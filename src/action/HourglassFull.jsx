
import React, { PropTypes } from 'react';

const HourglassFull = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 4H12v11h.02l-.02.02L20.98 24 12 32.98l.02.02H12v11h24V33h-.02l.02-.02L27.02 24 36 15.02l-.02-.02H36V4h-4z"/>
    </svg>
  );
};

HourglassFull.defaultProps = {
  style: {},
  className: '',
};

HourglassFull.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default HourglassFull;
