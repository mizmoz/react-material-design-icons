
import React, { PropTypes } from 'react';

const ArrowDownward = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill="#010101" d="M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z"/>
    </svg>
  );
};

ArrowDownward.defaultProps = {
  style: {},
  className: '',
};

ArrowDownward.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ArrowDownward;
