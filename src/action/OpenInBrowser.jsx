
import React, { PropTypes } from 'react';

const OpenInBrowser = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h8v-4h-8V16h28v20h-8v4h8c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM24 20l-8 8h6v12h4V28h6l-8-8z"/>
    </svg>
  );
};

OpenInBrowser.defaultProps = {
  style: {},
  className: '',
};

OpenInBrowser.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default OpenInBrowser;