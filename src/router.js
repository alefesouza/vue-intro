import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Languages from './views/Languages';
import EditLanguage from './views/EditLanguage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
  }, {
    path: '/languages',
    component: Languages,
  }, {
    path: '/languages/add',
    component: EditLanguage,
  }, {
    path: '/languages/:id/edit',
    component: EditLanguage,
  }]
});
