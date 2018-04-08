import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '../components/MainPage/index'
import Photo from '../pages/Photo/index'
import NotFound from '../pages/NotFound/index'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    // and finally the default route, when none of the above matches:
    {path: "*", component: NotFound}
  ]
})
