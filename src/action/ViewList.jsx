
import React, { PropTypes } from 'react';

const ViewList = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 28h8v-8H8v8zm0 10h8v-8H8v8zm0-20h8v-8H8v8zm10 10h24v-8H18v8zm0 10h24v-8H18v8zm0-28v8h24v-8H18z"/>
    </svg>
  );
};

ViewList.defaultProps = {
  style: {},
  className: '',
};

ViewList.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ViewList;
