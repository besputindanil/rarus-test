import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from 'components/layouts/default';
import MainPage from 'views/MainPage';
import SettingsPage from 'views/SettingsPage';
import { PAGE_TITLE } from 'js/content';

Vue.use(VueRouter);

const routes = [
  {
    name: 'index',
    path: '/',
    redirect: { name: 'ats' },
  },
  {
    name: 'ats',
    path: '/ats',
    component: DefaultLayout,
    redirect: { name: 'ats/1' },
    children: [
      {
        name: 'ats/1',
        path: '1',
        component: MainPage,
        meta: { title: PAGE_TITLE.MAIN },
      },
      {
        name: 'ats/2',
        path: '2',
        component: SettingsPage,
        meta: {
          title: PAGE_TITLE.SETTINGS,
          backTo: { name: 'ats/1' },
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
