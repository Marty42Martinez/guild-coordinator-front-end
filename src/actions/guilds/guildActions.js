import { createAction } from 'promise-middleware-redux';
import { getAllGuilds } from '../../services/guildCoordinatorApi';

export const [
  fetchGuildList,
  FETCH_GUILD_LIST,
  FETCH_GUILD_LIST_PENDING, ,
  FETCH_GUILD_LIST_REJECTED,
] = createAction('FETCH_GUILD_LIST', getAllGuilds);
