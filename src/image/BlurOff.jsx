
import React, { PropTypes } from 'react';

const BlurOff = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M28 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-.4 8.96c.13.02.26.04.4.04 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .14.02.27.04.41.18 1.32 1.23 2.37 2.56 2.55zM28 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-8 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm22 14c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-22-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm16 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8 27c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM5 10.55l7.57 7.57c-.19-.06-.37-.12-.57-.12-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.2-.06-.38-.11-.57l5.62 5.62C18.08 25.29 17 26.51 17 28c0 1.66 1.34 3 3 3 1.49 0 2.71-1.08 2.95-2.5l5.62 5.62c-.18-.06-.37-.12-.57-.12-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.2-.06-.38-.11-.57L37.45 43 40 40.45 7.55 8 5 10.55zM20 34c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm22-7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-30-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm14 22c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-8-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
    </svg>
  );
};

BlurOff.defaultProps = {
  style: {},
  className: '',
};

BlurOff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BlurOff;