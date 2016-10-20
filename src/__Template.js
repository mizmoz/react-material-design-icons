
import React, { PropTypes } from 'react';

const __Template = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      {props.__Svg}
    </svg>
  );
};

__Template.defaultProps = {
  style: {},
  className: '',
};

__Template.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default __Template;
