import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from './vuex/store'
import configRouter from './routes'
import filters from './utils/filters'
import App from './App.vue'
import iView from 'iview'
import VueResource from 'vue-resource'
import 'iview/dist/styles/iview.css'
import './assets/github-markdown.css'

const API_ROOT = process.env.NODE_ENV === 'production' ? 'http://123.57.95.130:8800' : 'http://localhost:9000'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(iView)
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true
Vue.http.options.root = API_ROOT

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router)

router.start(Vue.extend(App), '#root')
window.router = router
