import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const middle = () => import( /* webpackChunkName: "home" */ './views/middle');
const home = () => import( /* webpackChunkName: "home" */ './views/home');
const account = () => import( /* webpackChunkName: "account" */ './views/account');
const test = () => import( /* webpackChunkName: "test" */ './views/test');
const footer = () => import( /* webpackChunkName: "tabs" */ './components/footer');

/**
 *  投放
 * */
const index = () => import( /* webpackChunkName: "tabs" */ './views/customer/index');
const data = () => import( /* webpackChunkName: "tabs" */ './views/customer/data');
const campaign = () => import( /* webpackChunkName: "tabs" */ './views/customer/campaign');
const creative = () => import( /* webpackChunkName: "tabs" */ './views/customer/creative');
const user = () => import( /* webpackChunkName: "user" */ './views/customer/user');
const campaignDetail = () => import( /* webpackChunkName: "campaign" */ './views/customer/campaignDetail');
const creativeDetail = () => import( /* webpackChunkName: "creative" */ './views/customer/creativeDetail');

/**
 * 代理
 * */
const uindex = () => import( /* webpackChunkName: "utabs" */ './views/agent/index');
const uinfo = () => import( /* webpackChunkName: "utabs" */ './views/agent/info');
const uuser = () => import( /* webpackChunkName: "uuser" */ './views/agent/user');


let routes = [
  {
    path: '*',
    components: {
      index: home
    },
  },
  {
    name:'account',
    path: '/account',
    components: {
      index: account
    },
  },
  {
    path: '/test',
    components: {
      index: test
    },
  }
];

let tabs = [
  {
    name: 'home',
    path: 'home',
    components: {
      node: index,
      footer: footer
    },
    children: [{
      name: 'user',
      path: 'user',
      component: user
    }, ]
  },
  {
    name: 'data',
    path: 'data',
    components: {
      node: data,
      footer: footer
    }
  },
  {
    name: 'campaign',
    path: 'campaign',
    components: {
      node: campaign,
      footer: footer
    },
    children: [{
      name: 'campaignDetail',
      path: 'campaignDetail',
      component: campaignDetail
    }, ]

  },
  {
    name: 'creative',
    path: 'creative',
    components: {
      node: creative,
      footer: footer
    },
    children: [{
      name: 'creativeDetail',
      path: 'creativeDetail',
      component: creativeDetail
    }, ]
  }
]

let utabs = [
  {
    name: 'uhome',
    path: 'home',
    components: {
      node: uindex,
      footer: footer
    },
    children: [{
      name: 'uuser',
      path: 'user',
      component: uuser
    }, ]
  },
  {
    name: 'udata',
    path: 'data',
    components: {
      node: uinfo,
      footer: footer
    }
  }
]

let middle_tabs = [
  {
    name: 'ads',
    path: '/ads',
    component: middle,
    children: tabs,
  },
  {
    name: 'us',
    path: '/us',
    component: middle,
    children: utabs,
  },
  {
    name: 'middle_home',
    path: '/home',
    component: middle,
  }
]

// 并没有什么用哎  浏览器的前退后进
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    ...routes,
    ...middle_tabs,
  ],
})

router.beforeEach((to, from, next) => {
  window.token = to.query.token
  if(from.query.token && !to.query.token){
    next({name: to.name, query: {...to.query,token: from.query.token}})
  }else {
    next()
  }
})

export default router
