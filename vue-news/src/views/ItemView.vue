<template>
  <div>
    <div>title: {{ GET_ITEM.title }}</div>
    <div>points: {{ GET_ITEM.points }}</div>
    <div>user: {{ GET_ITEM.user }}</div>
    <div>type: {{ GET_ITEM.type }}</div>
    <div>content: {{ GET_ITEM.content }}</div>
    <div v-for="comment in GET_ITEM.comments" :key="comment.id">
      <p>comment id: {{ comment.id }}</p>
      <p>comment user: {{ comment.user }}</p>
      <p>comment time: {{ comment.time }}</p>
      <p>comment time_ago: {{ comment.time_ago }}</p>
      <p>comment type: {{ comment.type }}</p>
      <p>comment content: {{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_ITEM'])
  },
  methods: {
    ...mapActions(['FETCH_ITEM'])
  },
  created() {
    const id = this.$route.params.id;
    this.FETCH_ITEM(id);
  }
};
</script>

<style scoped></style>
