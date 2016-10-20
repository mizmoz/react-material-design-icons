
import React, { PropTypes } from 'react';

const Navigation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4L9 40.59 10.41 42 24 36l13.59 6L39 40.59z"/>
    </svg>
  );
};

Navigation.defaultProps = {
  style: {},
  className: '',
};

Navigation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Navigation;
