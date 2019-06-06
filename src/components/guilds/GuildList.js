import React from 'react';
import PropTypes from 'prop-types';
import GuildLink from './GuildLink';

const guildsByGame = guilds => {
  // if(guilds.length === 0) return [];
  return [...guilds].reduce(function(acc, current) {
    if(!acc[current['game']]) { acc[current['game']] = []; }
    acc[current['game']].push({ ...current });
    return acc;
  }, {});
  
  // const gameObj = {
  //   WorldOfWarcraft: [],
  //   DungeonsAndDragons: []
  // };

  // guilds.forEach(guild => {
  //   gameObj[guild.game] = [...gameObj[guild.game], guild];
  // });

  // return gameObj;
};

function GuildList({ guilds }) {
  const gameObj = guildsByGame(guilds);
  console.log(gameObj);

  const games = Object.keys(gameObj).map(game => {
    const gameList = gameObj[game].map(guild => (
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
  });
  // const wowList = gameObj.WorldOfWarcraft.map(guild => (
  //   <li key={guild._id}>
  //     <GuildLink guild={guild} />
  //   </li>
  // ));

  // const dndList = gameObj.DungeonsAndDragons.map(guild => (
  //   <li key={guild._id}>
  //     <GuildLink guild={guild} />
  //   </li>
  // ));
  const wowList = [];
  const dndList = [];
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
    image: PropTypes.string.isRequired,
    eventList: PropTypes.array,
    memberList: PropTypes.array
  })).isRequired
};

export default GuildList;
