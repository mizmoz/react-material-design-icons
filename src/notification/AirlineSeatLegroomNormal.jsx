
import React, { PropTypes } from 'react';

const AirlineSeatLegroomNormal = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M10 24V6H6v18c0 5.52 4.48 10 10 10h12v-4H16c-3.31 0-6-2.69-6-6zm31 12h-3V22c0-2.21-1.79-4-4-4H24V6H12v16c0 3.3 2.7 6 6 6h14v14h9c1.66 0 3-1.34 3-3s-1.34-3-3-3z"/>
    </svg>
  );
};

AirlineSeatLegroomNormal.defaultProps = {
  style: {},
  className: '',
};

AirlineSeatLegroomNormal.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AirlineSeatLegroomNormal;