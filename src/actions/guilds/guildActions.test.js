import { fetchGuildList, FETCH_GUILD_LIST, FETCH_GUILD_LIST_PENDING, FETCH_GUILD_LIST_REJECTED } from './guildActions';

jest.mock('../../services/guildCoordinatorApi', () => ({
  getGuildList: () => Promise.resolve([])
}));

describe('Guild Actions tests', () => {
  it('dispatches 4 actions when fetch is called', () => {
    const actions = fetchGuildList();

    expect(actions).toEqual({
      type: FETCH_GUILD_LIST,
      payload: Promise.resolve([]),
      pendingType: FETCH_GUILD_LIST_PENDING,
      fulfilledType: 'FETCH_GUILD_LIST_FULFILLED',
      rejectedType: FETCH_GUILD_LIST_REJECTED
    });

  });
});

