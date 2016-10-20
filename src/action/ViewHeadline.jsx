
import React, { PropTypes } from 'react';

const ViewHeadline = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 30h34v-4H8v4zm0 8h34v-4H8v4zm0-16h34v-4H8v4zm0-12v4h34v-4H8z"/>
    </svg>
  );
};

ViewHeadline.defaultProps = {
  style: {},
  className: '',
};

ViewHeadline.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewHeadline;
