
import React, { PropTypes } from 'react';

const RateReview = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 28v-4.95L25.76 9.29c.39-.39 1.02-.39 1.41 0l3.54 3.54c.39.39.39 1.02 0 1.41L16.95 28H12zm24 0H21l4-4h11v4z"/>
    </svg>
  );
};

RateReview.defaultProps = {
  style: {},
  className: '',
};

RateReview.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RateReview;
