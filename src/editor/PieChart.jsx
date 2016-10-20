
import React, { PropTypes } from 'react';

const PieChart = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M22 4v40C11.86 42.99 4 34.42 4 24S11.86 5 22 4zm4.06 0v17.99H44C43.06 12.49 35.53 4.94 26.06 4zm0 22.01V44c9.47-.94 17-8.49 17.94-17.99H26.06z"/>
    </svg>
  );
};

PieChart.defaultProps = {
  style: {},
  className: '',
};

PieChart.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PieChart;
