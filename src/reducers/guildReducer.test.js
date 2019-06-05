import { FETCH_GUILD_LIST, FETCH_GUILD_LIST_PENDING, FETCH_GUILD_LIST_REJECTED } from '../actions/guilds/guildActions';
import reducer from './guildReducer';

describe('Guild Reducer tests', () => {
  it('handles the FETCH action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };
    const action = {
      type: FETCH_GUILD_LIST,
      payload: ['Apocalypse', 'IgnisRising']
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      list: ['Apocalypse', 'IgnisRising'],
      loading: false,
      error: null
    });


  });
});
