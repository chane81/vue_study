import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// export const types = {
//   // getters
//   G_GET_NEWS: 'G_GET_NEWS',
//   G_GET_ASK: 'G_GET_ASK',
//   G_GET_JOBS: 'G_GET_JOBS',

//   // muataions
//   M_SET_NEWS: 'M_SET_NEWS',
//   M_SET_ASK: 'M_SET_ASK',
//   M_SET_JOBS: 'M_SET_JOBS',

//   // actions
//   A_FETCH_NEWS: 'A_FETCH_NEWS',
//   A_FETCH_ASK: 'A_FETCH_ASK',
//   A_FETCH_JOBS: 'A_FETCH_JOBS'
// };

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {}
  },
  getters: {
    GET_DATA: (state, getters) => payload => {
      return state[payload];
    }
    // GET_NEWS(state) {
    //   return state.news;
    // },
    // GET_ASK(state) {
    //   return state.ask;
    // },
    // GET_JOBS(state) {
    //   return state.jobs;
    // },
    // GET_USER(state) {
    //   return state.user;
    // },
    // GET_ITEM(state) {
    //   return state.item;
    // }
  },
  mutations,
  actions
});
