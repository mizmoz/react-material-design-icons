
import React, { PropTypes } from 'react';

const SubdirectoryArrowLeft = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 18l2.83 2.83L15.66 28H36V6h4v26H15.66l7.17 7.17L20 42 8 30l12-12z"/>
    </svg>
  );
};

SubdirectoryArrowLeft.defaultProps = {
  style: {},
  className: '',
};

SubdirectoryArrowLeft.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SubdirectoryArrowLeft;
