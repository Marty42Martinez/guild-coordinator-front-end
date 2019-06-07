import { FETCH_GUILD_LIST, FETCH_GUILD_LIST_PENDING, FETCH_GUILD_LIST_REJECTED } from '../actions/guilds/guildActions';
import { POST_GUILD, POST_GUILD_REJECTED } from '../actions/guilds/guildActions';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_GUILD_LIST:
      return { ...state, list: action.payload, loading: false };
    case FETCH_GUILD_LIST_PENDING:
      return { ...state, loading: true };
    case FETCH_GUILD_LIST_REJECTED:
      return { ...state, error: action.payload, loading: false };
    case POST_GUILD: {
      const { _id, game, members, name } = action.payload;
      return { ...state, list: [...state.list, { _id, game, members, name }] };
    }
    case POST_GUILD_REJECTED:
      return { ...state, error: { ...action.payload } };
    default: 
      return state;
  }
}
