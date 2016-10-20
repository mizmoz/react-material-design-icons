
import React, { PropTypes } from 'react';

const ExposurePlus1 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 14h-4v8H8v4h8v8h4v-8h8v-4h-8v-8zm20 22h-4V14.75l-6 2.05v-3.4l9.4-3.4h.6v26z"/>
    </svg>
  );
};

ExposurePlus1.defaultProps = {
  style: {},
  className: '',
};

ExposurePlus1.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ExposurePlus1;
