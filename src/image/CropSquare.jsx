
import React, { PropTypes } from 'react';

const CropSquare = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z"/>
    </svg>
  );
};

CropSquare.defaultProps = {
  style: {},
  className: '',
};

CropSquare.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CropSquare;
