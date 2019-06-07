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
  return post('http://18.217.24.159/api/v1/guilds/', body)
    .then(json => {
      console.log(json);
      return json;
    });
};

export const getEventsByGuild = () => {
  return get('http://18.217.24.159/api/v1/guilds/')
    .then(json => (json.map(event => ({
      _id: event._id,
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      guild: event.guild
    }))));
};

