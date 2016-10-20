
import React, { PropTypes } from 'react';

const Widgets = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 26v16h16V26H26zM6 42h16V26H6v16zM6 6v16h16V6H6zm27.31-2.63L22 14.69 33.31 26l11.31-11.31L33.31 3.37z"/>
    </svg>
  );
};

Widgets.defaultProps = {
  style: {},
  className: '',
};

Widgets.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Widgets;
