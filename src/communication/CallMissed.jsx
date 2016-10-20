
import React, { PropTypes } from 'react';

const CallMissed = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M39.17 14L24 29.17 12.83 18H22v-4H6v16h4v-9.17l14 14 18-18z"/>
    </svg>
  );
};

CallMissed.defaultProps = {
  style: {},
  className: '',
};

CallMissed.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CallMissed;
