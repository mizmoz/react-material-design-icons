
import React, { PropTypes } from 'react';

const FormatLineSpacing = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 14h5l-7-7-7 7h5v20H3l7 7 7-7h-5V14zm8-4v4h24v-4H20zm0 28h24v-4H20v4zm0-12h24v-4H20v4z"/>
    </svg>
  );
};

FormatLineSpacing.defaultProps = {
  style: {},
  className: '',
};

FormatLineSpacing.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormatLineSpacing;
