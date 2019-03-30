import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Things from '../pages/Things/Things.vue'
import Shop from '../pages/Shop/Shop.vue'
import Personage from '../pages/Personage/Personage.vue'
import login from '../pages/login/login.vue'

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShow:true
    }
  },
  {
    path:'/classify',
    component:Classify,
    meta:{
      isShow:true
    }
  },
  {
    path:'/things',
    component:Things,
    meta:{
      isShow:true
    }
  },
  {
    path:'/shop',
    component:Shop,
    meta:{
      isShow:true
    }
  },
  {
    path:'/personage',
    component:Personage,
    meta:{
      isShow:true
    }
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/',
    redirect:'/home',
  }
]
