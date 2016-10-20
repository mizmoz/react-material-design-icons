
import React, { PropTypes } from 'react';

const Spa = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill="#607D8B" d="M17.09 24c-2.14-1.43-4.5-2.55-7.05-3.22 2.55.67 4.91 1.79 7.05 3.22zm20.87-3.22c-2.58.68-4.97 1.82-7.14 3.27 2.16-1.45 4.55-2.59 7.14-3.27z"/>
    </svg>
  );
};

Spa.defaultProps = {
  style: {},
  className: '',
};

Spa.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Spa;
