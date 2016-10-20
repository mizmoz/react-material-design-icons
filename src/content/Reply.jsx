
import React, { PropTypes } from 'react';

const Reply = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 18v-8L6 24l14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z"/>
    </svg>
  );
};

Reply.defaultProps = {
  style: {},
  className: '',
};

Reply.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Reply;
