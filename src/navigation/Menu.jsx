
import React, { PropTypes } from 'react';

const Menu = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"/>
    </svg>
  );
};

Menu.defaultProps = {
  style: {},
  className: '',
};

Menu.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Menu;
