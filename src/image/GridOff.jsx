
import React, { PropTypes } from 'react';

const GridOff = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M16 8v2.91l4 4V8h8v8h-6.91l4 4H28v2.91l4 4V20h8v8h-6.91l4 4H40v2.91l4 4V8c0-2.21-1.79-4-4-4H9.09l4 4H16zm16 0h8v8h-8V8zM2.55 2.55L0 5.09l4 4V40c0 2.21 1.79 4 4 4h30.91l4 4 2.54-2.55-42.9-42.9zM20 25.09L22.91 28H20v-2.91zm-12-12L10.91 16H8v-2.91zM16 40H8v-8h8v8zm0-12H8v-8h6.91L16 21.09V28zm12 12h-8v-8h6.91L28 33.09V40zm4 0v-2.91L34.91 40H32z"/>
    </svg>
  );
};

GridOff.defaultProps = {
  style: {},
  className: '',
};

GridOff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default GridOff;
