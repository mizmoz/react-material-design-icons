
import React, { PropTypes } from 'react';

const More = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44 6H14c-1.38 0-2.47.7-3.19 1.76L0 23.99l10.81 16.23c.72 1.06 1.94 1.78 3.32 1.78H44c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 27c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
    </svg>
  );
};

More.defaultProps = {
  style: {},
  className: '',
};

More.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default More;
