
import React, { PropTypes } from 'react';

const Sort = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 36h12v-4H6v4zm0-24v4h36v-4H6zm0 14h24v-4H6v4z"/>
    </svg>
  );
};

Sort.defaultProps = {
  style: {},
  className: '',
};

Sort.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Sort;
