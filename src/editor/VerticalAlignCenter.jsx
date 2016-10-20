
import React, { PropTypes } from 'react';

const VerticalAlignCenter = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M16 38h6v8h4v-8h6l-8-8-8 8zm16-28h-6V2h-4v8h-6l8 8 8-8zM8 22v4h32v-4H8z"/>
    </svg>
  );
};

VerticalAlignCenter.defaultProps = {
  style: {},
  className: '',
};

VerticalAlignCenter.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VerticalAlignCenter;
