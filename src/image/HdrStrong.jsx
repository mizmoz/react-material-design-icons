
import React, { PropTypes } from 'react';

const HdrStrong = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M34 12c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm-24 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  );
};

HdrStrong.defaultProps = {
  style: {},
  className: '',
};

HdrStrong.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default HdrStrong;
