
import React, { PropTypes } from 'react';

const Store = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 8H8v4h32V8zm2 20v-4l-2-10H8L6 24v4h2v12h20V28h8v12h4V28h2zm-18 8H12v-8h12v8z"/>
    </svg>
  );
};

Store.defaultProps = {
  style: {},
  className: '',
};

Store.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Store;
