
import React, { PropTypes } from 'react';

const EventSeat = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M8 36v6h6v-6h20v6h6V30H8zm30-16h6v6h-6zM4 20h6v6H4zm30 6H14V10c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v16z"/>
    </svg>
  );
};

EventSeat.defaultProps = {
  style: {},
  className: '',
};

EventSeat.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default EventSeat;
