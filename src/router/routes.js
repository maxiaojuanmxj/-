import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Things from '../pages/Things/Things.vue'
import Shop from '../pages/Shop/Shop.vue'
import Personage from '../pages/Personage/Personage.vue'
import Phonelogin from '../pages/Personage/components/Phonelogin/Phonelogin.vue'
import Emaillogin from '../pages/Personage/components/emaillogin/Emaillogin.vue'
import section from '../pages/Things/section/section.vue'
import find from '../pages/Things/find/find.vue'
import search from '../pages/search/search.vue'
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
    path:'/search',
    component:search,
  },
  {
    path:'/things',
    component:Things,
    // redirect:'/things/section',
    meta:{
      isShow:true
    },
    children:[
      {
      path:'/things/section',
      component:section,
      meta:{
        isShow:true
      }
      },
      {
        path:'/things/find',
        component:find,
        meta:{
          isShow:true
        }
      }
    ]
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
