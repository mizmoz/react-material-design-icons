
import React, { PropTypes } from 'react';

const FlipToFront = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm4 8v-4H6c0 2.21 1.79 4 4 4zM6 18h4v-4H6v4zm24 24h4v-4h-4v4zm8-36H18c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 24H18V10h20v20zM22 42h4v-4h-4v4zm-8 0h4v-4h-4v4z"/>
    </svg>
  );
};

FlipToFront.defaultProps = {
  style: {},
  className: '',
};

FlipToFront.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FlipToFront;
