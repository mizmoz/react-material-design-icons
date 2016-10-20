
import React, { PropTypes } from 'react';

const Accessibility = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm18 14H30v26h-4V32h-4v12h-4V18H6v-4h36v4z"/>
    </svg>
  );
};

Accessibility.defaultProps = {
  style: {},
  className: '',
};

Accessibility.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Accessibility;
