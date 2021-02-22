import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue'),
    },
    {
        path: '/finish',
        name: 'finish',
        component: () => import('../views/finish/index.vue'),
    },
    {
        path: '/feedback/:op?',
        name: 'feedback',
        component: () => import('../views/feedback/index.vue'),
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    let locationHref = window.location.href;
    let startNum = locationHref.indexOf('id=');
    let idStr;
    if (startNum != -1) {
        idStr = locationHref.substr(startNum + 3, 36);
    }
    if (locationHref.indexOf('op=view') != -1 && to.name === 'login') {
        console.log('1111sun');
        next({ name: 'feedback', params: { op: idStr } });
    } else {
        if (to.name === 'login' || to.name === 'finish' || to.name === 'feedback') {
            console.log('2222sun');
            next();
        } else if (to.path.indexOf('/offerLogin') != -1) {
            console.log('3333sun');
            next();
        } else {
            console.log('4444sun');
            next({ path: '/login' });
        }
    }
});
export default router;
