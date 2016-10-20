
import React, { PropTypes } from 'react';

const Nature = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 32.24c6.95-.82 12.34-6.72 12.34-13.89 0-7.73-6.27-14-14-14s-14 6.27-14 14c0 6.93 5.04 12.67 11.66 13.79V40H10v4h28v-4H26v-7.76z"/>
    </svg>
  );
};

Nature.defaultProps = {
  style: {},
  className: '',
};

Nature.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Nature;
