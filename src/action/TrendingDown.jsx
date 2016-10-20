
import React, { PropTypes } from 'react';

const TrendingDown = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 36l4.59-4.59-9.76-9.75-8 8L4 14.83 6.83 12l12 12 8-8 12.58 12.59L44 24v12z"/>
    </svg>
  );
};

TrendingDown.defaultProps = {
  style: {},
  className: '',
};

TrendingDown.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default TrendingDown;
