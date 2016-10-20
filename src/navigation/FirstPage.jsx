
import React, { PropTypes } from 'react';

const FirstPage = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36.82 33.18L27.64 24l9.18-9.18L34 12 22 24l12 12zM12 12h4v24h-4z"/>
    </svg>
  );
};

FirstPage.defaultProps = {
  style: {},
  className: '',
};

FirstPage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FirstPage;
