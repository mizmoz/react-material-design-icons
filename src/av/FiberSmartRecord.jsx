
import React, { PropTypes } from 'react';

const FiberSmartRecord = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M50-3.48V.7c4.66 1.64 8 6.08 8 11.3s-3.34 9.66-8 11.3v4.18C56.9 25.7 62 19.46 62 12S56.9-1.7 50-3.48z"/>
    </svg>
  );
};

FiberSmartRecord.defaultProps = {
  style: {},
  className: '',
};

FiberSmartRecord.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FiberSmartRecord;
