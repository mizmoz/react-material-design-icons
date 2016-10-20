
import React, { PropTypes } from 'react';

const FiberManualRecord = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="16 -12 48 48" enable-background="new 16 -12 48 48"><circle cx="40" cy="12" r="16"/></svg>
    </svg>
  );
};

FiberManualRecord.defaultProps = {
  style: {},
  className: '',
};

FiberManualRecord.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FiberManualRecord;
