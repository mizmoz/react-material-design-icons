
import React, { PropTypes } from 'react';

const Layers = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M23.99 37.08L9.24 25.61 6 28.13l18 14 18-14-3.26-2.53-14.75 11.48zM24 32l14.73-11.45L42 18 24 4 6 18l3.26 2.53L24 32z"/>
    </svg>
  );
};

Layers.defaultProps = {
  style: {},
  className: '',
};

Layers.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Layers;
