
import React, { PropTypes } from 'react';

const InsertChart = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 34h-4V20h4v14zm8 0h-4V14h4v20zm8 0h-4v-8h4v8z"/>
    </svg>
  );
};

InsertChart.defaultProps = {
  style: {},
  className: '',
};

InsertChart.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default InsertChart;
