export const getGuildState = state => state.guilds;
export const getGuildList = state => getGuildState(state).list;
export const getGuildLoading = state => getGuildState(state).loading;
export const getGuildError = state => getGuildState(state).error;
