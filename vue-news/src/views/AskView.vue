<template>
  <div>
    <ul class="list">
      <li v-for="data in GET_ASK" :key="data.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ data.points }}</div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="title">
            <router-link :to="`/item/${data.id}`">{{ data.title }}</router-link>
          </p>
          <small class="link-text">{{ data.time_ago }} by {{ data.user }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    // #1
    ...mapGetters(["GET_ASK"])

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
    ...mapActions(["FETCH_ASK"])
  },
  created() {
    //this.$store.dispatch("FETCH_ASK");
    this.FETCH_ASK();
  }
};
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
