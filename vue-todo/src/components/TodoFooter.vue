<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    // clearTodo() {
    //   //this.$emit("clearAll");
    //   this.$store.commit("clearTodo");
    // }

    ...mapMutations(["clearTodo"])
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 10px auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
