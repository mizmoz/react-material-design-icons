
import React, { PropTypes } from 'react';

const Streetview = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M25.12 28.66C24.44 29.21 24 30.05 24 31v11h14c2.2 0 4-1.8 4-4V26.05c-1.89-.67-3.91-1.05-6-1.05-4.05 0-7.87 1.4-10.88 3.66z"/>
    </svg>
  );
};

Streetview.defaultProps = {
  style: {},
  className: '',
};

Streetview.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Streetview;
