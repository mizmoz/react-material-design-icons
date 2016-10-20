
import React, { PropTypes } from 'react';

const CompareArrows = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18.02 28H4v4h14.02v6L26 30l-7.98-8v6zm11.96-2v-6H44v-4H29.98v-6L22 18l7.98 8z"/>
    </svg>
  );
};

CompareArrows.defaultProps = {
  style: {},
  className: '',
};

CompareArrows.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CompareArrows;
