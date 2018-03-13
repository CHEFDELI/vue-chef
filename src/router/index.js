import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import explore from '@/components/explore'
import shop from '@/components/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/explore',
      name: 'explore',
      component: explore
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
})
