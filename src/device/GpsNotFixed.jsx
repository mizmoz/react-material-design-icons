
import React, { PropTypes } from 'react';

const GpsNotFixed = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M41.88 22C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12C13.66 7.04 7.04 13.66 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z"/>
    </svg>
  );
};

GpsNotFixed.defaultProps = {
  style: {},
  className: '',
};

GpsNotFixed.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default GpsNotFixed;
