<template>
  <div>
    <section>
      <!-- 질문 상세 영역 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${GET_DATA.user}`">{{ GET_DATA.user }}</router-link>
          <div class="time">{{ GET_DATA.time_ago }}</div>
        </div>
      </div>
      <h2>{{ GET_DATA.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="GET_DATA.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    GET_DATA() {
      return this.$store.getters.GET_DATA("item");
    }
  },
  methods: {
    ...mapActions(["FETCH_ITEM"])
  },
  created() {
    const id = this.$route.params.id;
    this.FETCH_ITEM(id);
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
