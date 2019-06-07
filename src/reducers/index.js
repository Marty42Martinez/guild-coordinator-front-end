import { combineReducers } from 'redux';
import guilds from './guildReducer';
import events from './eventReducer';

export default combineReducers({
  guilds,
  events
});
