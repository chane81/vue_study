import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit('SET_NEWS', data);
      })
      .catch(err => {
        console.log('FETCH_NEWS ERROR:', err);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(err => {
        console.log('FETCH_ASK ERROR:', err);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(err => {
        console.log('FETCH_JOBS ERROR:', err);
      });
  }
};
