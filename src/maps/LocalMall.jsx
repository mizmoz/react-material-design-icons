
import React, { PropTypes } from 'react';

const LocalMall = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 12h-4c0-5.52-4.48-10-10-10S14 6.48 14 12h-4c-2.21 0-3.98 1.79-3.98 4L6 40c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM24 6c3.31 0 6 2.69 6 6H18c0-3.31 2.69-6 6-6zm0 20c-5.52 0-10-4.48-10-10h4c0 3.31 2.69 6 6 6s6-2.69 6-6h4c0 5.52-4.48 10-10 10z"/>
    </svg>
  );
};

LocalMall.defaultProps = {
  style: {},
  className: '',
};

LocalMall.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalMall;
