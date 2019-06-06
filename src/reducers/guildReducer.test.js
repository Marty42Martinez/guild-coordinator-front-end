import { FETCH_GUILD_LIST, FETCH_GUILD_LIST_PENDING, FETCH_GUILD_LIST_REJECTED } from '../actions/guilds/guildActions';
import { POST_GUILD, POST_GUILD_REJECTED } from '../actions/guilds/guildActions';
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
      payload: [{ name: 'Apocalypse' }, { name: 'IgnisRising' }]
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      list: [{ name: 'Apocalypse' }, { name: 'IgnisRising' }],
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

  it('handles the POST_GUILD action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };
    const action = {
      type: POST_GUILD,
      payload: {
        body: {
          name: 'Ignis Rising',
          image: 'test.png',
          game: 'WorldOfWarcraft'
        }
      }
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      list: [{
        name: 'Ignis Rising',
        image: 'test.png',
        game: 'WorldOfWarcraft'
      }],
      loading: false,
      error: null
    });
  });

  it('handles the POST...REJECTED action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };
    const action = {
      type: POST_GUILD_REJECTED,
      payload: {
        status: 404,
        error: 'Not able to perform request'
      }
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      list: [],
      loading: false,
      error: {
        status: 404,
        error: 'Not able to perform request'
      }
    });
  });
});
