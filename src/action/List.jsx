
import React, { PropTypes } from 'react';

const List = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z"/>
    </svg>
  );
};

List.defaultProps = {
  style: {},
  className: '',
};

List.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default List;
