import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: require('../view/index'),
      children: [
        {
          path: 'main',
          component: require('../view/main')
        },
        {
          path: 'book',
          component: require('../view/book')
        },
        {
          path: 'comm',
          component: require('../view/comm')
        },
        {
          path: 'person',
          component: require('../view/person')
        },
        {
          path: 'booklist',
          component: require('../view/booklist')
        }
      ]
    },
    {
      path: '*',
      redirect: 'index/main'
    },
    {
      path: '/mydata',
      component: require('../view/mydata')
    },
    {
      path: '/talk',
      component: require('../view/talk')
    },
    {
      path: '/search',
      component: require('../view/searchpage')
    },
    {
      path: '/bookdata/:bookid',
      component: require('../view/bookdata')
    },
    {
      path: '/booklistdata/:bookid',
      component: require('../view/booklistdata')
    },
    {
      path: '/topic',
      component: require('../view/topic')
    }
  ]
})
