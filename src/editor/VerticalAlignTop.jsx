
import React, { PropTypes } from 'react';

const VerticalAlignTop = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M16 22h6v20h4V22h6l-8-8-8 8zM8 6v4h32V6H8z"/>
    </svg>
  );
};

VerticalAlignTop.defaultProps = {
  style: {},
  className: '',
};

VerticalAlignTop.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VerticalAlignTop;
