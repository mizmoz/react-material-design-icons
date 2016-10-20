
import React, { PropTypes } from 'react';

const Dehaze = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M4 31v4h40v-4H4zm0-10v4h40v-4H4zm0-10v4h40v-4H4z"/>
    </svg>
  );
};

Dehaze.defaultProps = {
  style: {},
  className: '',
};

Dehaze.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Dehaze;
