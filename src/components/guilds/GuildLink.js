import React from 'react';
import PropTypes from 'prop-types';

function GuildLink({ guild }) {
  return (
    <>
      <img src={guild.image}/>
      <p>{guild.name}</p>
    </>
  );
}

GuildLink.propTypes = {
  guild: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    eventList: PropTypes.array,
    memberList: PropTypes.array
  }).isRequired
};

export default GuildLink;
