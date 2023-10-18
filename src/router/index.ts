import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 替代之前的mode，是必须的
  routes,
});
export default router;
