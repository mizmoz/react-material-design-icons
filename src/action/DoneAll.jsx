
import React, { PropTypes } from 'react';

const DoneAll = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 14l-2.83-2.83-12.68 12.69 2.83 2.83L36 14zm8.49-2.83L23.31 32.34 14.97 24l-2.83 2.83L23.31 38l24-24-2.82-2.83zM.83 26.83L12 38l2.83-2.83L3.66 24 .83 26.83z"/>
    </svg>
  );
};

DoneAll.defaultProps = {
  style: {},
  className: '',
};

DoneAll.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default DoneAll;
