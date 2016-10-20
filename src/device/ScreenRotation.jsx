
import React, { PropTypes } from 'react';

const ScreenRotation = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32.97 5.03C39.5 8.13 44.19 14.48 44.9 22h3C46.88 9.68 36.58 0 24 0c-.45 0-.88.04-1.33.07L30.3 7.7l2.67-2.67zM20.46 3.49c-1.17-1.17-3.07-1.17-4.24 0L3.49 16.22c-1.17 1.17-1.17 3.07 0 4.24L27.53 44.5c1.17 1.17 3.07 1.17 4.24 0L44.5 31.77c1.17-1.17 1.17-3.07 0-4.24L20.46 3.49zm9.2 38.89L5.61 18.34 18.34 5.61l24.04 24.04-12.72 12.73zm-14.63.59C8.5 39.87 3.81 33.52 3.1 26h-3C1.12 38.32 11.42 48 24 48c.45 0 .88-.04 1.33-.07L17.7 40.3l-2.67 2.67z"/>
    </svg>
  );
};

ScreenRotation.defaultProps = {
  style: {},
  className: '',
};

ScreenRotation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ScreenRotation;
