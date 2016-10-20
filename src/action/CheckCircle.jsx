
import React, { PropTypes } from 'react';

const CheckCircle = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/>
    </svg>
  );
};

CheckCircle.defaultProps = {
  style: {},
  className: '',
};

CheckCircle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CheckCircle;
