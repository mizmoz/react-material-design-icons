
import React, { PropTypes } from 'react';

const ZoomOutMap = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30 6l4.59 4.59-5.76 5.75 2.83 2.83 5.75-5.76L42 18V6zM6 18l4.59-4.59 5.75 5.76 2.83-2.83-5.76-5.75L18 6H6zm12 24l-4.59-4.59 5.76-5.75-2.83-2.83-5.75 5.76L6 30v12zm24-12l-4.59 4.59-5.75-5.76-2.83 2.83 5.76 5.75L30 42h12z"/>
    </svg>
  );
};

ZoomOutMap.defaultProps = {
  style: {},
  className: '',
};

ZoomOutMap.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ZoomOutMap;
