import React from 'react';
import PropTypes from 'prop-types';

function EventLink({ event }) {
  return (
    <>
      <p>{event.name}</p>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.time}</p>
    </>
  );
}

EventLink.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  guild: PropTypes.string.isRequired
};

export default EventLink;
