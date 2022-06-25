import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from 'components/layouts/default';
import MainPage from 'views/MainPage';
import SettingsPage from 'views/SettingsPage';
import { PAGE_TITLES } from 'js/content';

Vue.use(VueRouter);

const routes = [
  {
    name: 'index',
    path: '/',
    redirect: { name: 'step' },
  },
  {
    name: 'step',
    path: '/step',
    component: DefaultLayout,
    redirect: { name: 'step/1' },
    children: [
      {
        name: 'step/1',
        path: '1',
        component: MainPage,
        meta: { title: PAGE_TITLES.MAIN },
      },
      {
        name: 'step/2',
        path: '2',
        component: SettingsPage,
        meta: { title: PAGE_TITLES.SETTINGS },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
