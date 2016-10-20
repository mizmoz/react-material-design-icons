
import React, { PropTypes } from 'react';

const CardTravel = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 12h-6V8c0-2.21-1.79-4-4-4H18c-2.21 0-4 1.79-4 4v4H8c-2.21 0-4 1.79-4 4v22c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM18 8h12v4H18V8zm22 30H8v-4h32v4zm0-10H8V16h6v4h4v-4h12v4h4v-4h6v12z"/>
    </svg>
  );
};

CardTravel.defaultProps = {
  style: {},
  className: '',
};

CardTravel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CardTravel;
