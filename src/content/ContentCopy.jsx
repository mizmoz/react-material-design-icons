
import React, { PropTypes } from 'react';

const ContentCopy = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z"/>
    </svg>
  );
};

ContentCopy.defaultProps = {
  style: {},
  className: '',
};

ContentCopy.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ContentCopy;
