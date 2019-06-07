import { fetchEventsByGuild, FETCH_EVENTS_BY_GUILD, FETCH_EVENTS_BY_GUILD_PENDING, FETCH_EVENTS_BY_GUILD_REJECTED } from './eventActions';

jest.mock('../../services/guildCoordinatorApi', () => ({
  getEventsByGuild: () => Promise.resolve([])
}));

describe('Events By Guild Action tests', () => {
  it('dispatches 4 actions when fetch is called', () => {
    const id = '1234';
    const actions = fetchEventsByGuild(id);
    expect(actions).toEqual({
      type: FETCH_EVENTS_BY_GUILD,
      payload: Promise.resolve([]),
      pendingType: FETCH_EVENTS_BY_GUILD_PENDING,
      fulfilledType: 'FETCH_EVENTS_BY_GUILD_FULFILLED',
      rejectedType: FETCH_EVENTS_BY_GUILD_REJECTED
    });
  });
});
