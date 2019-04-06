<template>
  <div>
    <div v-for="data in GET_NEWS" :key="data.id">
      {{ data.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_NEWS'])
  },
  methods: {
    ...mapActions(['FETCH_NEWS'])
  },
  created() {
    this.FETCH_NEWS();
  }
};
</script>

<style scoped></style>
