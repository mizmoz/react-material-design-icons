
import React, { PropTypes } from 'react';

const GraphicEq = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 36h4V12h-4v24zm8 8h4V4h-4v40zM6 28h4v-8H6v8zm24 8h4V12h-4v24zm8-16v8h4v-8h-4z"/>
    </svg>
  );
};

GraphicEq.defaultProps = {
  style: {},
  className: '',
};

GraphicEq.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default GraphicEq;
