
import React, { PropTypes } from 'react';

const KeyboardCapslock = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 16.83L33.17 26 36 23.17l-12-12-12 12L14.83 26 24 16.83zM12 36h24v-4H12v4z"/>
    </svg>
  );
};

KeyboardCapslock.defaultProps = {
  style: {},
  className: '',
};

KeyboardCapslock.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardCapslock;
