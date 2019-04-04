import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchAskList, fetchJobsList } from "../api";

Vue.use(Vuex);

export const types = {
  // getters
  G_GET_NEWS: "G_GET_NEWS",
  G_GET_ASK: "G_GET_ASK",
  G_GET_JOBS: "G_GET_JOBS",

  // muataions
  M_SET_NEWS: "M_SET_NEWS",
  M_SET_ASK: "M_SET_ASK",
  M_SET_JOBS: "M_SET_JOBS",

  // actions
  A_FETCH_NEWS: "A_FETCH_NEWS",
  A_FETCH_ASK: "A_FETCH_ASK",
  A_FETCH_JOBS: "A_FETCH_JOBS"
};

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  getters: {
    [types.G_GET_NEWS](state) {
      return state.news;
    },
    [types.G_GET_ASK](state) {
      return state.ask;
    },
    [types.G_GET_JOBS](state) {
      return state.jobs;
    }
  },
  mutations: {
    [types.M_SET_NEWS](state, payload) {
      state.news = payload;
    },
    [types.M_SET_ASK](state, payload) {
      state.ask = payload;
    },
    [types.M_SET_JOBS](state, payload) {
      state.jobs = payload;
    }
  },
  actions: {
    [types.A_FETCH_NEWS]({ commit }) {
      fetchNewsList()
        .then(({ data }) => {
          commit(types.M_SET_NEWS, data);
        })
        .catch(err => {
          console.log("FETCH_NEWS ERROR:", err);
        });
    },
    [types.A_FETCH_ASK]({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit(types.M_SET_ASK, data);
        })
        .catch(err => {
          console.log("FETCH_ASK ERROR:", err);
        });
    },
    [types.A_FETCH_JOBS]({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit(types.M_SET_JOBS, data);
        })
        .catch(err => {
          console.log("FETCH_JOBS ERROR:", err);
        });
    }
  }
});
