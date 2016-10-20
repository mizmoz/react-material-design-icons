
import React, { PropTypes } from 'react';

const LocationSearching = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M41.88 22.17C40.96 13.83 34.34 7.21 26 6.29V2.17h-4v4.12c-8.34.92-14.96 7.54-15.88 15.88H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38.17c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z"/>
    </svg>
  );
};

LocationSearching.defaultProps = {
  style: {},
  className: '',
};

LocationSearching.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocationSearching;
