import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const index = () => import(/* webpackChunkName: "tabs" */ './views/index');
const info = () => import(/* webpackChunkName: "tabs" */ './views/info');
const campaign = () => import(/* webpackChunkName: "tabs" */ './views/campaign');
const campaignDetail = () => import(/* webpackChunkName: "tabs" */ './views/campaignDetail');
const creative = () => import(/* webpackChunkName: "tabs" */ './views/creative');
const creativeDetail = () => import(/* webpackChunkName: "tabs" */ './views/creativeDetail');
const user = () => import(/* webpackChunkName: "tabs" */ './views/user');

const footer = () => import(/* webpackChunkName: "tabs" */ './components/footer');
const login = () => import(/* webpackChunkName: "user" */ './views/login');

let routes = [{
    path: '*',
    components: {
        node: index,
        footer: footer
    },
}];

let user_r = [
    {
        name: 'login',
        path: '/login',
        components: {
            mode: login
        },
        children: [
            {
                name: 'login2',
                path: 'login',
                component: login,
                children:[
                    {
                        name: 'login3',
                        path: 'login',
                        component: login,
                    }
                ]
            }
        ]
    }
]

let tabs = [
    {
        name: 'index',
        path: '/index',
        components: {
            node: index,
            footer: footer
        },
        children:[
            {
                name: 'user',
                path: 'user',
                component: user
            },
        ]
    },
    {
        name: 'info',
        path: '/info',
        components: {
            node: info,
            footer: footer
        }
    },
    {
        name: 'campaign',
        path: '/campaign',
        components: {
            node: campaign,
            footer: footer
        },
        children:[
            {
                name: 'campaignDetail',
                path: 'campaignDetail',
                component: campaignDetail
            },
        ]

    },
    {
        name: 'creative',
        path: '/creative',
        components: {
            node: creative,
            footer: footer
        },
        children:[
            {
                name: 'creativeDetail',
                path: 'creativeDetail',
                component: creativeDetail
            },
        ]
    }
]

// 并没有什么用哎  浏览器的前退后进
const scrollBehavior = (to, from, savedPosition) => {
    // console.log(to)
    // console.log(from)
    // console.log(savedPosition)
    if (savedPosition) {
        return savedPosition
    } else {
        return {x: 700, y: 700}
    }
}


export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    scrollBehavior,
    routes: [
        ...routes,
        ...tabs,
        ...user_r,
    ],

})
