import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/IndexPage'
import AddPage from '../components/AddPage'
import MyPage from '../components/MyPage'
import UserAdd from '../components/desc/UserAdd'
import ItemDesc from '../components/desc/ItemDesc'
import MyAdd from '../components/my/MyAdd.vue'
import MyLike from '../components/my/MyLike'
import MyNews from '../components/my/MyNews'
import NotFound from '../components/NotFound'

Vue.use(Router)
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
      meta: { scrollToTop: true }
    },{
      path: '/addpage',
      name: 'AddPage',
      component: AddPage,
      meta: { scrollToTop: true }
    },{
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    },{
      path: '/useradd',
      name: 'UserAdd',
      component: UserAdd,
      meta: { scrollToTop: true }
    },{
      path: '/itemdesc',
      name: 'ItemDesc',
      component: ItemDesc,
      meta: { scrollToTop: true }
    },{
      path: '/myadd',
      name: 'MyAdd',
      component: MyAdd
    },{
      path:'/mylike',
      name:'MyLike',
      component: MyLike
    },{
      path:'/mynews',
      name:'MyNews',
      component: MyNews
    },{
      path:'*',
      name:'notfound',
      component: NotFound
    }
  ],
})
