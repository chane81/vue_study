<template>
  <div>
    <p>name: {{ GET_DATA.id }}</p>
    <p>karma: {{ GET_DATA.karma }}</p>
    <p>created: {{ GET_DATA.created }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    //...mapGetters(["GET_DATA"])
    GET_DATA() {
      return this.$store.getters.GET_DATA("user");
    }
  },
  methods: {
    ...mapActions(["FETCH_USER"])
  },
  created() {
    const userName = this.$route.params.id;
    this.FETCH_USER(userName);
  }
};
</script>

<style scoped></style>
