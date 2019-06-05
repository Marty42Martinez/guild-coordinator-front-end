import React from 'react';
import PropTypes from 'prop-types';
import GuildLink from './GuildLink';

const guildsByGame = guilds => {
  const gameObj = {
    WorldOfWarcraft: [],
    DungeonsAndDragons: []
  };

  guilds.forEach(guild => {
    gameObj[guild.game] = [...gameObj[guild.game], guild];
  });

  return gameObj;
};

function GuildList({ guilds }) {
  const gameObj = guildsByGame(guilds);

  const wowList = gameObj.WorldOfWarcraft.map(guild => (
    <li key={guild._id}>
      <GuildLink guild={guild} />
    </li>
  ));

  const dndList = gameObj.DungeonsAndDragons.map(guild => (
    <li key={guild._id}>
      <GuildLink guild={guild} />
    </li>
  ));

  return (
    <section>
      <h2>World of Warcraft</h2>
      <ul>
        {wowList}
      </ul>
      <h2>Dungeons &amp; Dragons</h2>
      <ul>
        {dndList}
      </ul>
    </section>
  );
}

GuildList.propTypes = {
  guilds: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    eventList: PropTypes.array.isRequired,
    memberList: PropTypes.array.isRequired
  })).isRequired
};

export default GuildList;
