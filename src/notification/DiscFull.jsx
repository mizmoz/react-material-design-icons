
import React, { PropTypes } from 'react';

const DiscFull = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 32h4v-4h-4v4zm0-18v10h4V14h-4zM20 8C11.16 8 4 15.16 4 24s7.16 16 16 16 16-7.16 16-16S28.84 8 20 8zm0 20c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  );
};

DiscFull.defaultProps = {
  style: {},
  className: '',
};

DiscFull.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DiscFull;
