// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './assets/iconfont/iconfont.css'
import './assets/weui/weui.min.css'
import 'mint-ui/lib/style.css'

/**
 * 自定义style共用
 */
import './assets/styles.css'


/**
 * 组件使用，this.$wx
 */
import wx from 'weixin-js-sdk'
Vue.prototype.$wx=wx 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
