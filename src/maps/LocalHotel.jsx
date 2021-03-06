
import React, { PropTypes } from 'react';

const LocalHotel = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V10H2v30h4v-6h36v6h4V22c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
};

LocalHotel.defaultProps = {
  style: {},
  className: '',
};

LocalHotel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalHotel;
