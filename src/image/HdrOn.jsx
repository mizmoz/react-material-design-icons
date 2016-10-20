
import React, { PropTypes } from 'react';

const HdrOn = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 23v-2c0-1.7-1.3-3-3-3h-7v12h3v-4h2.3l1.7 4h3l-1.8-4.2c1-.5 1.8-1.6 1.8-2.8zm-3 0h-4v-2h4v2zm-26-1H9v-4H6v12h3v-5h4v5h3V18h-3v4zm13-4h-7v12h7c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zm0 9h-4v-6h4v6z"/>
    </svg>
  );
};

HdrOn.defaultProps = {
  style: {},
  className: '',
};

HdrOn.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default HdrOn;
