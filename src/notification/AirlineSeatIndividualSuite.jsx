
import React, { PropTypes } from 'react';

const AirlineSeatIndividualSuite = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V14H2v20h44V22c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
};

AirlineSeatIndividualSuite.defaultProps = {
  style: {},
  className: '',
};

AirlineSeatIndividualSuite.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AirlineSeatIndividualSuite;
