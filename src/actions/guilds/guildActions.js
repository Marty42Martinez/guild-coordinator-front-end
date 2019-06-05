import { createAction } from 'promise-middleware-redux';
import { getGuildList } from '../../services/guildCoordinatorApi';

export const [
  fetchGuildList,
  FETCH_GUILD_LIST,
  FETCH_GUILD_LIST_PENDING, ,
  FETCH_GUILD_LIST_REJECTED,
] = createAction('FETCH_GUILD_LIST', getGuildList);
