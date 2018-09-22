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
</style>
