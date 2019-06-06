import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function GuildLink({ guild }) {
  return (
    <Link to={`/${guild._id}`}>
      <img src={guild.image}/>
      <p>{guild.name}</p>
    </Link>
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
