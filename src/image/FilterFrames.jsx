
import React, { PropTypes } from 'react';

const FilterFrames = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 8h-8l-8-8-8 8H8c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 32H8V12h9.03l7.04-7 6.96 7H40v28zm-4-24H12v20h24"/>
    </svg>
  );
};

FilterFrames.defaultProps = {
  style: {},
  className: '',
};

FilterFrames.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FilterFrames;
