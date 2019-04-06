<template>
  <div>
    <p v-for="data in GET_JOBS" :key="data.id">
      <a v-bind:href="data.url">{{ data.title }}</a>
      <small>{{ data.time_ago }}, {{ data.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_JOBS'])
  },
  methods: {
    ...mapActions(['FETCH_JOBS'])
  },
  created() {
    this.FETCH_JOBS();
  }
};
</script>

<style scoped></style>
