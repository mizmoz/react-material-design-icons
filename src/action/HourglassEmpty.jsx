
import React, { PropTypes } from 'react';

const HourglassEmpty = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 5v10l9 9-9 9v10h24V33l-9-9 9-9V5H12zm20 29v5H16v-5l8-8 8 8zm-8-12l-8-8V9h16v5l-8 8z"/>
    </svg>
  );
};

HourglassEmpty.defaultProps = {
  style: {},
  className: '',
};

HourglassEmpty.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default HourglassEmpty;
