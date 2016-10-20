
import React, { PropTypes } from 'react';

const Title = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M10 8v6h11v24h6V14h11V8z"/>
    </svg>
  );
};

Title.defaultProps = {
  style: {},
  className: '',
};

Title.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Title;
