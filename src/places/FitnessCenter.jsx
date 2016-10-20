
import React, { PropTypes } from 'react';

const FitnessCenter = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M41.14 29.71L44 26.86 41.14 24 34 31.14 16.86 14 24 6.86 21.14 4l-2.85 2.86L15.43 4l-4.29 4.29-2.85-2.86-2.86 2.86 2.86 2.85L4 15.43l2.86 2.86L4 21.14 6.86 24 14 16.86 31.14 34 24 41.14 26.86 44l2.85-2.86L32.57 44l4.29-4.29 2.85 2.86 2.86-2.86-2.86-2.85L44 32.57z"/>
    </svg>
  );
};

FitnessCenter.defaultProps = {
  style: {},
  className: '',
};

FitnessCenter.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FitnessCenter;
