import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


router.beforeEach((to, from, next) => {
document.body.scrollTop = 0
document.documentElement.scrollTop = 0
window.pageYOffset = 0
next()
 
})