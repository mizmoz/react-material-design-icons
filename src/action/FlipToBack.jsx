
import React, { PropTypes } from 'react';

const FlipToBack = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 14h-4v4h4v-4zm0 8h-4v4h4v-4zm0-16c-2.21 0-4 1.79-4 4h4V6zm8 24h-4v4h4v-4zM38 6v4h4c0-2.21-1.79-4-4-4zM26 6h-4v4h4V6zm-8 28v-4h-4c0 2.21 1.79 4 4 4zm20-8h4v-4h-4v4zm0-8h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zM10 14H6v24c0 2.21 1.79 4 4 4h24v-4H10V14zm20-4h4V6h-4v4zm0 24h4v-4h-4v4z"/>
    </svg>
  );
};

FlipToBack.defaultProps = {
  style: {},
  className: '',
};

FlipToBack.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FlipToBack;
