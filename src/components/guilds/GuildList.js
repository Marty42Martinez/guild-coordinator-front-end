import React from 'react';
import PropTypes from 'prop-types';
import GuildListByGame from './GuildListByGame';

const guildsByGame = guilds => {
  return [...guilds].reduce(function(acc, current) {
    if(!acc[current['game']]) { acc[current['game']] = []; }
    acc[current['game']].push({ ...current });
    return acc;
  }, {});
};

function GuildList({ guilds }) {
  const gameObj = guildsByGame(guilds);

  const games = Object.keys(gameObj).map((game, i) => (
    <GuildListByGame key={i} game={game} list={gameObj[game]} />
  ));
  
  return (
    <section>
      {games}
    </section>
  );
}

GuildList.propTypes = {
  guilds: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    image: PropTypes.string,
    eventList: PropTypes.array,
    memberList: PropTypes.array
  })).isRequired
};

export default GuildList;
