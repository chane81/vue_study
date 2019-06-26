<template>
  <list-item></list-item>
</template>

<script>
//import { mapGetters, mapActions } from "vuex";
import ListItem from "../components/ListItem";

export default {
  components: {
    ListItem
  }
  // computed: {
  //   // #1
  //   ...mapGetters(["GET_ASK"])

  //   // #2
  //   // ...mapState({
  //   //   ask: state => state.ask
  //   // })
  //   // #3
  //   // asks() {
  //   //   return this.$store.state.ask;
  //   // }
  // },
  // methods: {
  //   ...mapActions(["FETCH_ASK"])
  // },
  // created() {
  //   //this.$store.dispatch("FETCH_ASK");
  //   this.FETCH_ASK();
  // }
};
</script>

<style scoped>
</style>
