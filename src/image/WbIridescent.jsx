
import React, { PropTypes } from 'react';

const WbIridescent = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M10 29h28V17H10v12zM22 1.1V7h4V1.1h-4zm16.07 5l-3.59 3.59 2.83 2.83 3.59-3.59-2.83-2.83zM26 44.9V39h-4v5.9h4zm14.9-7.83l-3.59-3.59-2.83 2.83 3.59 3.59 2.83-2.83zM7.1 8.93l3.59 3.59 2.83-2.83L9.93 6.1 7.1 8.93zM9.93 39.9l3.59-3.59-2.83-2.83-3.59 3.59 2.83 2.83z"/>
    </svg>
  );
};

WbIridescent.defaultProps = {
  style: {},
  className: '',
};

WbIridescent.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default WbIridescent;
