
import React, { PropTypes } from 'react';

const FormatBold = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M31.2 21.58c1.93-1.35 3.3-3.53 3.3-5.58 0-4.51-3.49-8-8-8H14v28h14.08c4.19 0 7.42-3.4 7.42-7.58 0-3.04-1.73-5.63-4.3-6.84zM20 13h6c1.66 0 3 1.34 3 3s-1.34 3-3 3h-6v-6zm7 18h-7v-6h7c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
    </svg>
  );
};

FormatBold.defaultProps = {
  style: {},
  className: '',
};

FormatBold.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatBold;