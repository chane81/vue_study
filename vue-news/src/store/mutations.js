export default {
  SET_NEWS(state, payload) {
    state.news = payload;
  },
  SET_JOBS(state, payload) {
    state.ask = payload;
  },
  SET_ASK(state, payload) {
    state.jobs = payload;
  }
};
