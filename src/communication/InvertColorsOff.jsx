
import React, { PropTypes } from 'react';

const InvertColorsOff = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M41.29 41.75l-4.71-4.71L24 24.46l-7.13-7.13-2.83-2.83L8.54 9 6 11.55l5.56 5.56c-5.1 6.28-4.72 15.53 1.12 21.38 3.12 3.12 7.22 4.69 11.31 4.69 3.57 0 7.14-1.19 10.06-3.56l5.4 5.38L42 42.45l-.71-.7zM24 39.17c-3.21 0-6.22-1.25-8.48-3.51-2.27-2.27-3.52-5.28-3.52-8.49 0-2.64.86-5.14 2.42-7.21L24 29.55v9.62zm0-28.97v9.16l14.51 14.51c2.73-5.91 1.68-13.14-3.2-18.02L24 4.54l-7.41 7.41 2.83 2.83L24 10.2z"/>
    </svg>
  );
};

InvertColorsOff.defaultProps = {
  style: {},
  className: '',
};

InvertColorsOff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default InvertColorsOff;
