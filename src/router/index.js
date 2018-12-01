import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home.vue';
import Events from '../pages/Events.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home,
    }, {
        path: '/events',
        component: Events
    }]
});
