
import React, { PropTypes } from 'react';

const GetApp = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z"/>
    </svg>
  );
};

GetApp.defaultProps = {
  style: {},
  className: '',
};

GetApp.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default GetApp;
