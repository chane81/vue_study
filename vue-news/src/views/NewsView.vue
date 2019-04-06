<template>
  <div>
    <p v-for="data in GET_NEWS" :key="data.id">
      <a v-bind:href="data.url">
        {{ data.title }}
      </a>
      <small>{{ data.time_ago }} by {{ data.user }}</small>
    </p>
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
