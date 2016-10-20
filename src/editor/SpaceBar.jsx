
import React, { PropTypes } from 'react';

const SpaceBar = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 18v8H12v-8H8v12h32V18z"/>
    </svg>
  );
};

SpaceBar.defaultProps = {
  style: {},
  className: '',
};

SpaceBar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SpaceBar;
