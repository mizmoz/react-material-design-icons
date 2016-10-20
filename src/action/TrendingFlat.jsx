
import React, { PropTypes } from 'react';

const TrendingFlat = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44 24l-8-8v6H6v4h30v6z"/>
    </svg>
  );
};

TrendingFlat.defaultProps = {
  style: {},
  className: '',
};

TrendingFlat.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default TrendingFlat;
