import { createRouter, createWebHashHistory } from 'vue-router';
import index from '@/views/Index.vue';
import login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
