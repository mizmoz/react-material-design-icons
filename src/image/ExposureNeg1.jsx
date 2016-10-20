
import React, { PropTypes } from 'react';

const ExposureNeg1 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 22v4h16v-4H8zm30 14h-4V14.75l-6 2.05v-3.4l9.4-3.4h.6v26z"/>
    </svg>
  );
};

ExposureNeg1.defaultProps = {
  style: {},
  className: '',
};

ExposureNeg1.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ExposureNeg1;
