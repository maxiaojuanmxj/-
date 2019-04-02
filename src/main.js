import Vue from 'vue'
import App from './app.vue'
import store from './store'
import 'lib-flexible/flexible'
import router from './router'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import './mockData/homeData.json'
import './mockData/mockServer'
Vue.store = store
new Vue({
  el:'#app',
  components:{
    App,
    FooterGuide,
  },
  template:'<App/>',
  router,
  store,
})
