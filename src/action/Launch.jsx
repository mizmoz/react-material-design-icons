
import React, { PropTypes } from 'react';

const Launch = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"/>
    </svg>
  );
};

Launch.defaultProps = {
  style: {},
  className: '',
};

Launch.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Launch;