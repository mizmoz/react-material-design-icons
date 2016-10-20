
import React, { PropTypes } from 'react';

const ClearAll = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M10 26h28v-4H10v4zm-4 8h28v-4H6v4zm8-20v4h28v-4H14z"/>
    </svg>
  );
};

ClearAll.defaultProps = {
  style: {},
  className: '',
};

ClearAll.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ClearAll;
