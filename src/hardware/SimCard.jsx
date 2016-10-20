
import React, { PropTypes } from 'react';

const SimCard = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M39.98 8c0-2.21-1.77-4-3.98-4H20L8 16v24c0 2.21 1.79 4 4 4h24.02c2.21 0 3.98-1.79 3.98-4l-.02-32zM18 38h-4v-4h4v4zm16 0h-4v-4h4v4zm-16-8h-4v-8h4v8zm8 8h-4v-8h4v8zm0-12h-4v-4h4v4zm8 4h-4v-8h4v8z"/>
    </svg>
  );
};

SimCard.defaultProps = {
  style: {},
  className: '',
};

SimCard.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SimCard;