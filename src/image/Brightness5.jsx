
import React, { PropTypes } from 'react';

const Brightness5 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 30.63L46.63 24 40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37zM24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z"/>
    </svg>
  );
};

Brightness5.defaultProps = {
  style: {},
  className: '',
};

Brightness5.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Brightness5;
