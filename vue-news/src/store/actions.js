import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo
} from '../api';

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
  },
  FETCH_USER({ commit }, payload) {
    fetchUserInfo(payload)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(err => {
        console.log('FETCH_USER:', err);
      });
  },
  FETCH_ITEM({ commit }, payload) {
    fetchItemInfo(payload)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(err => {
        console.log('FETCH_ITEM:', err);
      });
  }
};
