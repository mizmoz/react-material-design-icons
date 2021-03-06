
import React, { PropTypes } from 'react';

const BrokenImage = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 10v13.2l-6-6-8 8-8-8-8 8-6-6V10c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4zm-6 12.8l6 6V38c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V24.8l6 6 8-8 8 8 8-8z"/>
    </svg>
  );
};

BrokenImage.defaultProps = {
  style: {},
  className: '',
};

BrokenImage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BrokenImage;
