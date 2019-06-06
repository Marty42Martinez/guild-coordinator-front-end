import { fetchGuildList, FETCH_GUILD_LIST, FETCH_GUILD_LIST_PENDING, FETCH_GUILD_LIST_REJECTED } from './guildActions';

import { postGuild, POST_GUILD, POST_GUILD_REJECTED } from './guildActions';

jest.mock('../../services/guildCoordinatorApi', () => ({
  getAllGuilds: () => Promise.resolve([]),
  postGuildToDB: () => Promise.resolve([])
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
  it('dispatches 4 actions when post is called', () => {
    const actions = postGuild();

    expect(actions).toEqual({
      type: POST_GUILD,
      payload: Promise.resolve([]),
      pendingType: 'POST_GUILD_PENDING',
      fulfilledType: 'POST_GUILD_FULFILLED',
      rejectedType: POST_GUILD_REJECTED
    });
  });
});

