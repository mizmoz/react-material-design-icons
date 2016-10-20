
import React, { PropTypes } from 'react';

const Shop = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M32 12V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H4v26c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12H32zM20 8h8v4h-8V8zm-2 28V18l15 8-15 10z"/>
    </svg>
  );
};

Shop.defaultProps = {
  style: {},
  className: '',
};

Shop.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Shop;
