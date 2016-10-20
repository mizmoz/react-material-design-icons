
import React, { PropTypes } from 'react';

const RssFeed = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 8.89v5.66c14.06 0 25.46 11.4 25.46 25.46h5.66C39.11 22.82 25.18 8.89 8 8.89zM8 20.2v5.66c7.81 0 14.14 6.34 14.14 14.14h5.66c0-10.93-8.87-19.8-19.8-19.8z"/>
    </svg>
  );
};

RssFeed.defaultProps = {
  style: {},
  className: '',
};

RssFeed.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RssFeed;
