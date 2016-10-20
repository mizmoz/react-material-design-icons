
import React, { PropTypes } from 'react';

const BrandingWatermark = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 32H24V26h18v12z"/>
    </svg>
  );
};

BrandingWatermark.defaultProps = {
  style: {},
  className: '',
};

BrandingWatermark.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BrandingWatermark;
