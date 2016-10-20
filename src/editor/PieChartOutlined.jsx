
import React, { PropTypes } from 'react';

const PieChartOutlined = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm2 4.13c7.21.9 12.97 6.66 13.87 13.87H26V8.13zM8 24c0-8.12 6.13-14.88 14-15.87v31.74C14.13 38.88 8 32.12 8 24zm18 15.87V26h13.87c-.9 7.21-6.66 12.97-13.87 13.87z"/>
    </svg>
  );
};

PieChartOutlined.defaultProps = {
  style: {},
  className: '',
};

PieChartOutlined.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PieChartOutlined;
