
import React, { PropTypes } from 'react';

const NextWeek = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill="#010101" d="M40 14h-8v-4c0-1.1-.44-2.1-1.18-2.82C30.1 6.44 29.1 6 28 6h-8c-2.2 0-4 1.8-4 4v4H8c-2.2 0-4 1.8-4 4v22c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4zm-20-4h8v4h-8v-4zm2 27l-2-2 6-6-6-6 2-2 8 8-8 8z"/>
    </svg>
  );
};

NextWeek.defaultProps = {
  style: {},
  className: '',
};

NextWeek.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NextWeek;
