
import React, { PropTypes } from 'react';

const AirlineSeatFlatAngled = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M44.51 28.57l-1.38 3.77-24.73-8.92 4.15-11.31 17.12 6.18c4.2 1.51 6.37 6.12 4.84 10.28zM3 24.27l13 4.69V38h16v-3.26L41.05 38l1.38-3.77L4.38 20.5 3 24.27zm11.59-3.86c2.99-1.43 4.25-5.01 2.82-8-1.43-2.99-5.01-4.25-8-2.82-2.99 1.43-4.25 5.01-2.82 8 1.43 2.99 5.01 4.25 8 2.82z"/>
    </svg>
  );
};

AirlineSeatFlatAngled.defaultProps = {
  style: {},
  className: '',
};

AirlineSeatFlatAngled.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AirlineSeatFlatAngled;
