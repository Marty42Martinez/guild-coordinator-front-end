import React from 'react';
import PropTypes from 'prop-types';
import EventLink from './EventLink';

function EventList({ events }) {
  const listOfEvents = events.map(event => (
    <li key={event._id}>
      <EventLink event={event} />
    </li>
  ));
  
  return (
    <ul>
      {listOfEvents}
    </ul>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    guild: PropTypes.string.isRequired
  })).isRequired
};

export default EventList;
