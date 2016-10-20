
import React, { PropTypes } from 'react';

const BubbleChart = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle cx="14.4" cy="28.8" r="6.4"/><circle cx="29.6" cy="36" r="4"/><circle cx="30.4" cy="17.6" r="9.6"/></svg>
    </svg>
  );
};

BubbleChart.defaultProps = {
  style: {},
  className: '',
};

BubbleChart.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default BubbleChart;
