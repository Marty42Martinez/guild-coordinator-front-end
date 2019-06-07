import React from 'react';
import PropTypes from 'prop-types';
import GuildLink from './GuildLink';

function GuildListByGame({ game, list }) {
  const gameList = list.map(guild => (
    <li key={guild._id}>
      <GuildLink guild={guild} />
    </li>
  ));
  return (
    <>
      <h2>{game}</h2>
      <ul>
        {gameList}
      </ul>
    </>
  );
}

GuildListByGame.propTypes = {
  game: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired
};

export default GuildListByGame;
