
import React, { PropTypes } from 'react';

const Highlight = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M12 28l6 6v10h12V34l6-6V18H12zM22 4h4v6h-4zM7 11.75l2.828-2.828 4.243 4.243-2.82 2.828zm26.923 1.422l4.242-4.242 2.83 2.828L36.75 16z"/>
    </svg>
  );
};

Highlight.defaultProps = {
  style: {},
  className: '',
};

Highlight.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Highlight;
