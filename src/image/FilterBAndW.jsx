
import React, { PropTypes } from 'react';

const FilterBAndW = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32L24 22v16H10l14-16V10h14v28z"/>
    </svg>
  );
};

FilterBAndW.defaultProps = {
  style: {},
  className: '',
};

FilterBAndW.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FilterBAndW;
