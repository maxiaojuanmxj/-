import Vue from 'vue'
import App from './app.vue'
import 'lib-flexible/flexible'
import router from './router'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
new Vue({
  el:'#app',
  components:{
    App,
    FooterGuide,
  },
  template:'<App/>',
  router
})
