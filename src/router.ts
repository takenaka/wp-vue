import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '',

  routes: [
    {
      path: '/',
      component: () => import('./components/page/Home.vue')
    },
    {
      path: '/post',
      component: () => import('./components/page/Post.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
