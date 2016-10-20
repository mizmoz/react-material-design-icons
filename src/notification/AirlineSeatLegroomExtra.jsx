
import React, { PropTypes } from 'react';

const AirlineSeatLegroomExtra = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 24V6H4v18c0 5.52 4.48 10 10 10h12v-4H14c-3.31 0-6-2.69-6-6zm37.66 10.47c-.75-1.44-2.58-1.94-4.06-1.26l-2.19 1-6.83-13.95c-.67-1.37-2.06-2.24-3.58-2.24L22 18V6H10v16c0 3.31 2.69 6 6 6h14l6.82 14 7.43-3.41c1.55-.71 2.21-2.58 1.41-4.12z"/>
    </svg>
  );
};

AirlineSeatLegroomExtra.defaultProps = {
  style: {},
  className: '',
};

AirlineSeatLegroomExtra.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AirlineSeatLegroomExtra;
