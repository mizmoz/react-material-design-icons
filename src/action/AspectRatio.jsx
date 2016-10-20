
import React, { PropTypes } from 'react';

const AspectRatio = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 24h-4v6h-6v4h10V24zm-24-6h6v-4H10v10h4v-6zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z"/>
    </svg>
  );
};

AspectRatio.defaultProps = {
  style: {},
  className: '',
};

AspectRatio.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AspectRatio;
