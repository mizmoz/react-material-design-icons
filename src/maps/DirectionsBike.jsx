
import React, { PropTypes } from 'react';

const DirectionsBike = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M31 11c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zM10 24C4.5 24 0 28.5 0 34s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm11.6-19.9l4.7-4.8 1.5 1.5c2.5 2.6 6 4.1 10.1 4.1v-4c-3 0-5.5-1.1-7.3-2.9l-3.9-3.8c-.6-.7-1.6-1.2-2.7-1.2s-2.1.4-2.8 1.2l-5.5 5.5c-.7.7-1.2 1.7-1.2 2.8 0 1.1.5 2.1 1.2 2.9L22 28v10h4V25.5l-4.4-4.4zM38 24c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
    </svg>
  );
};

DirectionsBike.defaultProps = {
  style: {},
  className: '',
};

DirectionsBike.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DirectionsBike;