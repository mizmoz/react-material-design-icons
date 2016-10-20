
import React, { PropTypes } from 'react';

const ReplyAll = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 16v-6L0 24l14 14v-6l-8-8 8-8zm12 2v-8L12 24l14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z"/>
    </svg>
  );
};

ReplyAll.defaultProps = {
  style: {},
  className: '',
};

ReplyAll.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ReplyAll;
