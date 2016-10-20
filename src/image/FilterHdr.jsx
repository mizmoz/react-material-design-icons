
import React, { PropTypes } from 'react';

const FilterHdr = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 12l-7.5 10 5.7 7.6L23 32c-3.38-4.5-9-12-9-12L2 36h44L28 12z"/>
    </svg>
  );
};

FilterHdr.defaultProps = {
  style: {},
  className: '',
};

FilterHdr.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FilterHdr;
