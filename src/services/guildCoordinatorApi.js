import defaultImage from '../assets/honey-bear.png';
import { get, post } from './restMethods';

export const getAllGuilds = () => {
  return get('http://18.217.24.159/api/v1/guilds/')
    .then(json => (json.map(guild => ({
      _id: guild._id,
      name: guild.name,
      image: guild.image || defaultImage,
      game: guild.game
    })
    )));
};

export const postGuildToDB = (body) => {
  const cheat = { ...body, members: ['5cf9a7095c7d1d24206b45df'] };
  
  return post('http://18.217.24.159/api/v1/guilds/', cheat)
    .then(json => {
      return json;
    });
};

export const getEventsByGuild = (id) => {
  return get(`http://18.217.24.159/api/v1/guilds/events/${id}`)
    .then(json => (json.map(event => ({
      _id: event._id,
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      guild: event.guild
    }))));
};

