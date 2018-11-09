import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter)

import HomeMain from '@component/home/homemain';
import OnNext from '@component/home/onnext';
import Cinema from '@component/cinema/cinema';
import MovieDetail from '@component/detail/movie-detail';
import AppMain from '@component/home/main';
import Login from '@component/mine/login';


const routes = [
    {
        path: '/',
        redirect: { name: 'home'}
    },
    {
        path: '/home',
        name: 'home',
        component: HomeMain,
        redirect: '/home/onnow',
        children: [
            {
              path: 'onnext',
              name: 'onnext',
              component: OnNext,
            },
            {
                path: 'onnow',
                name: 'onnow',
                component: AppMain
            }
        ]
    },
    {
        path: '/cinema',
        name: 'cinema',
        component: Cinema
    },
    {
        path: '/detail',
        name: 'detail',
        component: MovieDetail
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
    // {
    //     path: '/not-found',
    //     name: 'not-found',
    //     component: AppNotFound
    // },
    // {
    //     path: '**',
    //     redirect: '/not-found'
    // }
]

// 路由工具
const router = new VueRouter({
    mode: 'history', // hash
    // base: '/app/',
    routes
})

export default router