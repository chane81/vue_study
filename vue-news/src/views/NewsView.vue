<template>
  <div>
    <!-- <p v-for="data in GET_NEWS" :key="data.id">
      <a v-bind:href="data.url">
        {{ data.title }}
      </a>
      <small>
        {{ data.time_ago }} by
        <router-link :to="`/user/${data.user}`">
          {{ data.user }}
        </router-link>
      </small>
    </p>-->
    <ul class="news-list">
      <li v-for="data in GET_NEWS" :key="data.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ data.points }}</div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="data.url">{{ data.title }}</a>
          </p>
          <small class="link-text">
            by
            <router-link :to="`/user/${data.user}`" class="link-text">{{ data.user }}</router-link>
          </small>
        </div>
        <!-- <a v-bind:href="data.url">{{ data.title }}</a>
        <small>
          {{ data.time_ago }} by
          <router-link :to="`/user/${data.user}`">{{ data.user }}</router-link>
        </small>-->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["GET_NEWS"])
  },
  methods: {
    ...mapActions(["FETCH_NEWS"])
  },
  created() {
    this.FETCH_NEWS();
  }
};
</script>

<style scoped>
.news-list {
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
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
