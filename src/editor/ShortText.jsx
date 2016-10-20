
import React, { PropTypes } from 'react';

const ShortText = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 18h32v4H8zm0 8h20v4H8z"/>
    </svg>
  );
};

ShortText.defaultProps = {
  style: {},
  className: '',
};

ShortText.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ShortText;
