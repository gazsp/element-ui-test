import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Countries from './components/Countries.vue'

import 'element-ui/lib/theme-chalk/index.css'
import './css/styles.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  { path: '/', component: Home },
  { path: '/countries', component: Countries }
]

const router = new VueRouter({
  routes
})

// Static data
import countries from './data/countries.js'
window._state = {
  countries: countries
}

Vue.component('ui-app', App)

new Vue({
  router
}).$mount('#app')
