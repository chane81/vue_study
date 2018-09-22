<template>
  <div id="app">
    <TododoHeader></TododoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoHeader from './components/TodoHeader.vue'

export default {
  components: {
    'TododoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  }
}
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
