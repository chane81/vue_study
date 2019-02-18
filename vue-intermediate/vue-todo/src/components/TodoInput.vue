<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodo"
    >
    <!-- <button v-on:click="addTodo">add</button> -->
    <span
      class="addContainer"
      v-on:click="addTodo"
    >
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal
      v-if="showModal"
      @close="showModal = false"
    >
      <!-- 헤더 슬롯 재정의 -->
      <h3 slot="header">
        경고!
        <i
          class="closeModalBtn fas fa-times"
          @click="showModal = false"
        ></i>
      </h3>

      <!-- 바디 슬롯 재정의 -->
      <h3 slot="body">
        무언가를 입력하세요.
      </h3>

      <!-- 푸터 슬롯 재정의 -->
      <h3 slot="footer">
        copy right.
      </h3>
    </Modal>
  </div>

</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal: Modal
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: 0 0.5rem;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 90%;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
