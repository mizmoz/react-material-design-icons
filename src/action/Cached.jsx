
import React, { PropTypes } from 'react';

const Cached = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 16l-8 8h6c0 6.63-5.37 12-12 12-2.03 0-3.93-.51-5.61-1.39l-2.92 2.92C17.95 39.08 20.86 40 24 40c8.84 0 16-7.16 16-16h6l-8-8zm-26 8c0-6.63 5.37-12 12-12 2.03 0 3.93.51 5.61 1.39l2.92-2.92C30.05 8.92 27.14 8 24 8 15.16 8 8 15.16 8 24H2l8 8 8-8h-6z"/>
    </svg>
  );
};

Cached.defaultProps = {
  style: {},
  className: '',
};

Cached.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Cached;