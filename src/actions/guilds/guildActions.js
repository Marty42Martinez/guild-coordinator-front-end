import { createAction } from 'promise-middleware-redux';
import { postGuildToDB } from '../../services/guildCoordinatorApi';
import { getAllGuilds } from '../../services/mockServices';

export const [
  fetchGuildList,
  FETCH_GUILD_LIST,
  FETCH_GUILD_LIST_PENDING, ,
  FETCH_GUILD_LIST_REJECTED
] = createAction('FETCH_GUILD_LIST', getAllGuilds);

export const [
  postGuild,
  POST_GUILD, , ,
  POST_GUILD_REJECTED
] = createAction('POST_GUILD', postGuildToDB);
