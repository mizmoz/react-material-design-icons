
import React, { PropTypes } from 'react';

const Face = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M18 23.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm12 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16 0-.58.04-1.15.1-1.71 4.71-2.09 8.47-5.95 10.42-10.74 3.62 5.1 9.57 8.45 16.31 8.45 1.55 0 3.06-.19 4.5-.53.43 1.44.67 2.96.67 4.53 0 8.82-7.18 16-16 16z"/>
    </svg>
  );
};

Face.defaultProps = {
  style: {},
  className: '',
};

Face.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Face;
