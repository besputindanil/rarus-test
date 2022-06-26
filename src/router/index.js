import Vue from 'vue';
import VueRouter from 'vue-router';

import store from 'store';

import DefaultLayout from 'components/layouts/default';
import MainPage from 'views/MainPage';
import SettingsPage from 'views/SettingsPage';

const ErrorPage = () => import('views/ErrorPage');

import { PAGE_TITLE } from 'js/content';

import hasActiveAts from 'router/middleware/hasActiveAts';
import middlewarePipeline from 'router/middlewarePipeline';

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
          middleware: [hasActiveAts],
        },
      },
    ],
  },
  {
    name: 'error',
    path: '/error/:code?',
    component: ErrorPage,
  },
  {
    path: '*',
    redirect: { name: 'error' },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (!to.meta.middleware && !to.matched[0].meta.middleware) {
    return next();
  }
  const middleware = to.matched[0].meta.middleware
    ? to.matched[0].meta.middleware
    : to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
    nextMiddleware: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
