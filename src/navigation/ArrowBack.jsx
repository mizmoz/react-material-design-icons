
import React, { PropTypes } from 'react';

const ArrowBack = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z"/>
    </svg>
  );
};

ArrowBack.defaultProps = {
  style: {},
  className: '',
};

ArrowBack.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ArrowBack;
