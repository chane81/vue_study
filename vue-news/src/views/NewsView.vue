<template>
  <div>
    <p v-for="data in GET_NEWS" :key="data.id">
      <a v-bind:href="data.url">
        {{ data.title }}
      </a>
      <small>
        {{ data.time_ago }} by
        <router-link :to="`/user/${data.user}`">
          {{ data.user }}
        </router-link>
      </small>
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
