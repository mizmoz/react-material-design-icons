
import React, { PropTypes } from 'react';

const CropLandscape = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 10H10c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 24H10V14h28v20z"/>
    </svg>
  );
};

CropLandscape.defaultProps = {
  style: {},
  className: '',
};

CropLandscape.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CropLandscape;
