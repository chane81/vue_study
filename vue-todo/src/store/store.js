import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];

    if (localStorage.length > 0) {
      // for (var i = 0; i < localStorage.length; i++) {
      //     if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
      //         this.todoItems.push(localStorage.key(i));
      //         //console.log(localStorage.key(i));
      //     }
      // }

      for (let [key, value] of Object.entries(localStorage)) {
        if (key !== "loglevel:webpack-dev-server") {
         arr.push(JSON.parse(value));
        }
      }
    }

    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters: getters,
  mutations: mutations
});