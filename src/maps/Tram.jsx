
import React, { PropTypes } from 'react';

const Tram = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 33.88V17c0-5.59-5.22-6.8-12.01-6.97L27.5 7H34V4H14v3h9.5l-1.52 3.03C15.72 10.22 10 11.47 10 17v16.88c0 2.89 2.37 5.31 5.18 5.95L12 43v1h4.46l4-4H28l4 4h4v-1l-3-3h-.16c3.38 0 5.16-2.75 5.16-6.12zM24 37c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10-9H14V18h20v10z"/>
    </svg>
  );
};

Tram.defaultProps = {
  style: {},
  className: '',
};

Tram.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Tram;