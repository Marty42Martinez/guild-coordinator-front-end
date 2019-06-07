import { FETCH_EVENTS_BY_GUILD, FETCH_EVENTS_BY_GUILD_PENDING, FETCH_EVENTS_BY_GUILD_REJECTED } from '../actions/events/eventActions';

import reducer from './eventReducer';

describe('Event reducer tests', () => {
  it('handles the FETCH_EVENTS action', () => {
    const initial = {
      list: [],
      loading: false,
      error: null
    };
    const action = {
      type: FETCH_EVENTS_BY_GUILD,
      payload: [{ title: 'event1' }, { title: 'event2' }]
    };

    const newState = reducer(initial, action);

    expect(newState).toEqual({
      list: [{ title: 'event1' }, { title: 'event2' }],
      loading: false,
      error: null
    });
  });

  it('handles the FETCH...PENDING action', () => {
    const initial = {
      list: [],
      loading: false,
      error: null
    };
    const action = {
      type: FETCH_EVENTS_BY_GUILD_PENDING
    };

    const newState = reducer(initial, action);

    expect(newState).toEqual({
      list: [],
      loading: true,
      error: null
    });
  });

  it('handles the FETCH...REJECTED action', () => {
    const initial = {
      list: [],
      loading: false,
      error: null
    };
    const action = {
      type: FETCH_EVENTS_BY_GUILD_REJECTED,
      payload: {
        status: 404,
        message: 'WRONG'
      }
    };

    const newState = reducer(initial, action);

    expect(newState).toEqual({
      list: [],
      loading: false,
      error: {
        status: 404,
        message: 'WRONG'
      }
    });
  });
});
