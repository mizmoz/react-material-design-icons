
import React, { PropTypes } from 'react';

const ReportProblem = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"/>
    </svg>
  );
};

ReportProblem.defaultProps = {
  style: {},
  className: '',
};

ReportProblem.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ReportProblem;
