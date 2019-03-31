import VueRouter from 'vue-router';
import Vue from 'vue';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/news',
      component: NewsView
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: 'jobs',
      component: JobsView
    }
  ]
});

export default router;