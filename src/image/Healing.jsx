
import React, { PropTypes } from 'react';

const Healing = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M35.46 24.04l7.96-7.96c.78-.78.78-2.05 0-2.83l-8.67-8.67c-.78-.78-2.05-.78-2.83 0l-7.96 7.96L16 4.59c-.39-.39-.9-.59-1.41-.59-.51 0-1.02.2-1.41.59L4.5 13.26c-.78.78-.78 2.05 0 2.83l7.96 7.96L4.5 32c-.78.78-.78 2.05 0 2.83l8.67 8.67c.78.78 2.05.78 2.83 0l7.96-7.96 7.96 7.96c.39.39.9.59 1.41.59.51 0 1.02-.2 1.41-.59l8.67-8.67c.78-.78.78-2.05 0-2.83l-7.95-7.96zM24 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-9.42 3.92l-7.25-7.25 7.26-7.26 7.25 7.25-7.26 7.26zM20 26c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4-8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5.33 18.67l-7.25-7.25 7.26-7.26 7.25 7.25-7.26 7.26z"/>
    </svg>
  );
};

Healing.defaultProps = {
  style: {},
  className: '',
};

Healing.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Healing;
