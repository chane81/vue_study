import Vue from 'vue';
import Vuex from 'vuex';

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
  mutations: {
    addOneItem(state, payload) {
      const obj = { id: state.todoItems.length, completed: false, item: payload };
      localStorage.setItem(payload, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      const { todoItem, index } = payload;
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, payload) {
      const { todoItem, index } = payload;
      state[index].completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearTodo(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});