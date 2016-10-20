
import React, { PropTypes } from 'react';

const CardMembership = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 4H8C5.79 4 4 5.79 4 8v22c0 2.21 1.79 4 4 4h8v10l8-4 8 4V34h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 26H8v-4h32v4zm0-10H8V8h32v12z"/>
    </svg>
  );
};

CardMembership.defaultProps = {
  style: {},
  className: '',
};

CardMembership.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CardMembership;
