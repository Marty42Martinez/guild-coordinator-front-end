import React from 'react';
import PropTypes from 'prop-types';

function EventLink({ event }) {
  return (
    <>
      <p>{event.title}</p>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.time}</p>
    </>
  );
}

EventLink.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    guild: PropTypes.string.isRequired
  }).isRequired
};

export default EventLink;
