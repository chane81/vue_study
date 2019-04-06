<template>
  <div>
    <p>name: {{ GET_USER.id }}</p>
    <p>karma: {{ GET_USER.karma }}</p>
    <p>created: {{ GET_USER.created }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_USER'])
  },
  methods: {
    ...mapActions(['FETCH_USER'])
  },
  created() {
    const userNmae = this.$route.params.id;
    this.FETCH_USER(userNmae);
  }
};
</script>

<style scoped></style>
