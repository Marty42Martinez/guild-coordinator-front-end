export const getEventState = state => state.events;
export const getEventList = state => getEventState(state).list;
export const getEventLoading = state => getEventState(state).loading;
export const getEventError = state => getEventState(state).error;
