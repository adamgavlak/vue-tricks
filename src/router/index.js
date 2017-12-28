import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import ComponentsIndex from '@/components/components/Index'
import ComponentsNew from '@/components/components/New'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/components',
      name: 'components#index',
      component: ComponentsIndex
    },
    {
      path: '/components/new',
      name: 'components#new',
      component: ComponentsNew
    }
  ]
})
