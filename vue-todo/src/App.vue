<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoHeader from "./components/TodoHeader.vue";

export default {
  // data() {
  //   return {
  //     todoItems: []
  //   };
  // },
  //methods: {
  // removeOneItem(todoItem, index) {
  //   localStorage.removeItem(todoItem.item);
  //   this.todoItems.splice(index, 1);
  // },
  // toggleOneItem(todoItem, index) {
  //   this.todoItems[index].completed = !todoItem.completed;
  //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  // },
  // clearAllItems() {
  //   localStorage.clear();
  //   this.todoItems = [];
  // }
  //},
  // 인스턴스가 생성될때 created() 함수 실행됨
  // created() {
  //   if (localStorage.length > 0) {
  //     for (let [key, value] of Object.entries(localStorage)) {
  //       if (key !== "loglevel:webpack-dev-server") {
  //         this.todoItems.push(JSON.parse(value));
  //       }
  //     }
  //   }
  // },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
