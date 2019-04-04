import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import getters from "./getters"

import home from "./modules/home"
import category from "./modules/category"
import search from './modules/search'
// import things from "./modules/things"
Vue.use(Vuex)
export default new Vuex.Store({
  mutations,
  getters,
  modules:{
    home,
    category,
    // things,
    search
  }
})
