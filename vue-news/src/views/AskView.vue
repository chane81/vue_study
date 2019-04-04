<template>
  <div>
    <div v-for="ask in G_GET_ASK" :key="ask.id">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { types } from "../store/index";

export default {
  computed: {
    ...mapGetters([types.G_GET_ASK])

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // #3
    // asks() {
    //   return this.$store.state.ask;
    // }
  },
  methods: {
    ...mapActions([types.A_FETCH_ASK])
  },
  created() {
    //this.$store.dispatch("FETCH_ASK");
    this.A_FETCH_ASK();
  }
};
</script>

<style scoped></style>
