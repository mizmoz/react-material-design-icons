
import React, { PropTypes } from 'react';

const SettingsInputSvideo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M16 23c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm14-10c0-1.66-1.34-3-3-3h-6c-1.66 0-3 1.34-3 3s1.34 3 3 3h6c1.66 0 3-1.34 3-3zM17 30c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm7-28C11.87 2 2 11.87 2 24s9.87 22 22 22 22-9.87 22-22S36.13 2 24 2zm0 40c-9.93 0-18-8.08-18-18S14.07 6 24 6s18 8.08 18 18-8.07 18-18 18zm11-22c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  );
};

SettingsInputSvideo.defaultProps = {
  style: {},
  className: '',
};

SettingsInputSvideo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SettingsInputSvideo;
