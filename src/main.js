import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import WebFront from 'webfontloader'

import './util/momentPHP'

WebFront.load({
  google: {
    families: ['Noto Sans:400italic,700italic,400,700:vietnamese', 'Noto Serif:400italic,700italic,400,700:vietnamese', 'Inconsolata:400,700:vietnamese']
  }
})

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = '/wp-json/wp/v2'

NProgress.configure({
  showSpinner: false
})

Vue.http.interceptors.push((request, next) => {
  NProgress.done(true)
  NProgress.start()
  request.headers['Accept'] = 'application/vnd.api+json'
  next((response) => {
    NProgress.done()
  })
})

var router = new VueRouter({
  hashbang: false,
  history: true
})

sync(store, router)

router.start(App, 'body')
