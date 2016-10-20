
import React, { PropTypes } from 'react';

const ExpandMore = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M33.17 17.17L24 26.34l-9.17-9.17L12 20l12 12 12-12z"/>
    </svg>
  );
};

ExpandMore.defaultProps = {
  style: {},
  className: '',
};

ExpandMore.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ExpandMore;
