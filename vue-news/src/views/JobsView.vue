<template>
  <div>
    <div v-for="data in GET_JOBS" :key="data.id">
      {{ data.title }}
    </div>
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
