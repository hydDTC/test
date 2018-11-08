import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const middle = () => import( /* webpackChunkName: "home" */ './views/middle');
const home = () => import( /* webpackChunkName: "home" */ './views/home');
const first = () => import( /* webpackChunkName: "first" */ './views/first');
const test = () => import( /* webpackChunkName: "first" */ './views/test');

const footer = () => import( /* webpackChunkName: "tabs" */ './components/footer');
const index = () => import( /* webpackChunkName: "tabs" */ './views/index');
const info = () => import( /* webpackChunkName: "tabs" */ './views/info');
const campaign = () => import( /* webpackChunkName: "tabs" */ './views/campaign');
const creative = () => import( /* webpackChunkName: "tabs" */ './views/creative');

const user = () => import( /* webpackChunkName: "user" */ './views/user');
const campaignDetail = () => import( /* webpackChunkName: "campaign" */ './views/campaignDetail');
const creativeDetail = () => import( /* webpackChunkName: "creative" */ './views/creativeDetail');

let routes = [
  {
    path: '*',
    components: {
      index: home
    },
  },
  {
    path: '/account',
    components: {
      index: first
    },
  },
  {
    path: '/test',
    components: {
      index: test
    },
  }
];

let tabs = [{
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
      node: info,
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

let ads_tabs = [
  {
    name: 'ads',
    path: '/ads',
    component: middle,
    children: tabs
  },
  {
    name: 'middle_home',
    path: '/home',
    component: middle,
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
    return {
      x: 0,
      y: 0
    }
  }
}


export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    ...routes,
    ...ads_tabs,
  ],

})
