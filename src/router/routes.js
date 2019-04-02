import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Things from '../pages/Things/Things.vue'
import Shop from '../pages/Shop/Shop.vue'
import Personage from '../pages/Personage/Personage.vue'
import Phonelogin from '../pages/Personage/components/Phonelogin/Phonelogin.vue'
import Emaillogin from '../pages/Personage/components/emaillogin/Emaillogin.vue'

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
  },
  {
    path:'/phonelogin',
    component:Phonelogin,
  },
  {
    path:'/emaillogin',
    component:Emaillogin,
  },
  {
    path:'/',
    redirect:'/home',
  }
]
