<template>
  <div>
    <p v-for="data in GET_ASK" :key="data.id">
      <a :href="data.url">{{ data.title }}</a>
      <small>{{ data.time_ago }} by {{ data.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    // #1
    ...mapGetters(['GET_ASK'])

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
    ...mapActions(['FETCH_ASK'])
  },
  created() {
    //this.$store.dispatch("FETCH_ASK");
    this.FETCH_ASK();
  }
};
</script>

<style scoped></style>
