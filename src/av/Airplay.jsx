
import React, { PropTypes } from 'react';

const Airplay = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 6H6c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h8v-4H6V10h36v24h-8v4h8c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM12 44h24L24 32z"/>
    </svg>
  );
};

Airplay.defaultProps = {
  style: {},
  className: '',
};

Airplay.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Airplay;
