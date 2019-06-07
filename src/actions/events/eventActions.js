import { createAction } from 'promise-middleware-redux';
import { getEventsByGuild } from '../../services/guildCoordinatorApi';

export const [
  fetchEventsByGuild,
  FETCH_EVENTS_BY_GUILD,
  FETCH_EVENTS_BY_GUILD_PENDING, ,
  FETCH_EVENTS_BY_GUILD_REJECTED
] = createAction('FETCH_EVENTS_BY_GUILD', getEventsByGuild);
