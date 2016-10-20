
import React, { PropTypes } from 'react';

const SubdirectoryArrowRight = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M-31 29l-12 12-2.83-2.83 7.17-7.17H-61V7h4v20h18.34l-7.17-7.17L-43 17l12 12zm71 1L28 42l-2.83-2.83L32.34 32H8V6h4v22h20.34l-7.17-7.17L28 18l12 12z"/>
    </svg>
  );
};

SubdirectoryArrowRight.defaultProps = {
  style: {},
  className: '',
};

SubdirectoryArrowRight.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SubdirectoryArrowRight;
