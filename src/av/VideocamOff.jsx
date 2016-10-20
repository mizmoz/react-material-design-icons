
import React, { PropTypes } from 'react';

const VideocamOff = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 13l-8 8v-7c0-1.1-.9-2-2-2H19.64L42 34.36V13zM6.55 4L4 6.55 9.45 12H8c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c.41 0 .77-.15 1.09-.37L39.46 42 42 39.45 6.55 4z"/>
    </svg>
  );
};

VideocamOff.defaultProps = {
  style: {},
  className: '',
};

VideocamOff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VideocamOff;