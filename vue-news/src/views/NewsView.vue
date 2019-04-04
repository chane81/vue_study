<template>
  <div>
    <div v-for="data in G_GET_NEWS" :key="data.id">
      {{ data.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { types } from "../store/index";

export default {
  computed: {
    ...mapGetters([types.G_GET_NEWS])
  },
  methods: {
    ...mapActions([types.A_FETCH_NEWS])
  },
  created() {
    this.A_FETCH_NEWS();
  }
};
</script>

<style scoped></style>
