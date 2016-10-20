
import React, { PropTypes } from 'react';

const ShowChart = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M7 36.99l12-12.03 8 8 17-19.12-2.82-2.83L27 26.96l-8-8L4 33.99z"/>
    </svg>
  );
};

ShowChart.defaultProps = {
  style: {},
  className: '',
};

ShowChart.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ShowChart;
