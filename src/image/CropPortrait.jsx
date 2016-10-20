
import React, { PropTypes } from 'react';

const CropPortrait = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M34 6H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H14V10h20v28z"/>
    </svg>
  );
};

CropPortrait.defaultProps = {
  style: {},
  className: '',
};

CropPortrait.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CropPortrait;
