<template>
  <div>
    <div v-for="job in G_GET_JOBS" :key="job.id">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { types } from "../store/index";

export default {
  computed: {
    ...mapGetters([types.G_GET_JOBS])
  },
  methods: {
    ...mapActions([types.A_FETCH_JOBS])
  },
  created() {
    this.A_FETCH_JOBS();
  }
};
</script>

<style scoped></style>
