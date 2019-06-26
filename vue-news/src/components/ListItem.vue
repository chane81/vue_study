<template>
  <div>
    <ul class="list">
      <li v-for="data in GET_DATA" :key="data.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ data.points || 0 }}</div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="title">
            <template v-if="data.domain">
              <a v-bind:href="data.url">{{ data.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`item/${data.id}`">{{data.title}}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ data.time_ago }} by
            <router-link
              v-if="data.user"
              :to="`/user/${data.user}`"
              class="link-text"
            >{{ data.user }}</router-link>
            <a v-else :href="data.url" target="_blank">{{ data.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      routeName: this.$route.name
    };
  },
  computed: {
    //...mapGetters(["GET_DATA"])(this.routeName)
    GET_DATA() {
      return this.$store.getters.GET_DATA(this.routeName);
    }
  },
  methods: {
    ...mapActions(["FETCH_DATA"])
  },
  created() {
    this.FETCH_DATA(this.routeName);
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