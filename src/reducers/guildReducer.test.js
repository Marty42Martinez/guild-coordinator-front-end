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
  it('handles the FETCH..PENDING action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };
    const action = {
      type: FETCH_GUILD_LIST_PENDING
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      list: [],
      loading: true,
      error: null
    });
  });
  it('handles the FETCH..REJECTED action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };
    const action = {
      type: FETCH_GUILD_LIST_REJECTED,
      payload: {
        status: 404,
        error: 'Something bad happened'
      }
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      list: [],
      loading: false,
      error: {
        status: 404,
        error: 'Something bad happened'
      }
    });
  });
});
