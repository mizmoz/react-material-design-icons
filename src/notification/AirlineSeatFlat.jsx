
import React, { PropTypes } from 'react';

const AirlineSeatFlat = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44 22v4H18V14h18c4.42 0 8 3.58 8 8zM4 28v4h12v4h16v-4h12v-4H4zm10.29-3.8c2.32-2.37 2.28-6.17-.09-8.48-2.37-2.32-6.17-2.28-8.48.09-2.32 2.37-2.28 6.17.09 8.48 2.36 2.32 6.16 2.28 8.48-.09z"/>
    </svg>
  );
};

AirlineSeatFlat.defaultProps = {
  style: {},
  className: '',
};

AirlineSeatFlat.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AirlineSeatFlat;