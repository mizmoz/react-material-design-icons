
import React, { PropTypes } from 'react';

const LastPage = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M11.18 14.82L20.36 24l-9.18 9.18L14 36l12-12-12-12zM32 12h4v24h-4z"/>
    </svg>
  );
};

LastPage.defaultProps = {
  style: {},
  className: '',
};

LastPage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LastPage;
