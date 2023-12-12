import Vue from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Page/Home.vue';
import About from './Page/About.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
