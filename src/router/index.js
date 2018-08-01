import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Square from '@/components/Square'
import Community from '@/components/Community'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'HomePage',
      path: '/',
      component: HomePage
    },
    {
      name: 'Square',
      path: '/square',
      component: Square
    },
    {
      name: 'Community',
      path: '/community',
      component: Community
    }
  ]
})
