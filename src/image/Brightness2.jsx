
import React, { PropTypes } from 'react';

const Brightness2 = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 4c-3.65 0-7.06.99-10 2.7 5.97 3.46 10 9.9 10 17.3s-4.03 13.84-10 17.3c2.94 1.71 6.35 2.7 10 2.7 11.05 0 20-8.95 20-20S31.05 4 20 4z"/>
    </svg>
  );
};

Brightness2.defaultProps = {
  style: {},
  className: '',
};

Brightness2.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Brightness2;
