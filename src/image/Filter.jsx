
import React, { PropTypes } from 'react';

const Filter = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M31.93 20.57l-5.5 7.08-3.93-4.72L17 30h22l-7.07-9.43zM6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28z"/>
    </svg>
  );
};

Filter.defaultProps = {
  style: {},
  className: '',
};

Filter.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Filter;