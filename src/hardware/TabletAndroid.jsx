
import React, { PropTypes } from 'react';

const TabletAndroid = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 0H12C8.68 0 6 2.68 6 6v36c0 3.32 2.68 6 6 6h24c3.32 0 6-2.68 6-6V6c0-3.32-2.68-6-6-6zm-8 44h-8v-2h8v2zm10.5-6h-29V6h29v32z"/>
    </svg>
  );
};

TabletAndroid.defaultProps = {
  style: {},
  className: '',
};

TabletAndroid.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default TabletAndroid;
