import { FETCH_EVENTS_BY_GUILD, FETCH_EVENTS_BY_GUILD_PENDING, FETCH_EVENTS_BY_GUILD_REJECTED } from '../actions/events/eventActions';

const initialState = {
  list: [],
  loading: false,
  error: null
};


export default function reducer(state = initialState, action){
  switch(action.type) {
    default: 
      return state;
  }
}