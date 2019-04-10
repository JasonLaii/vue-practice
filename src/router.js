import Vue from 'vue'
import Router from 'vue-router'
import Me from './views/me.vue'
import Index from './components/index.vue'
import Content from './components/content.vue'
Vue.use(Router);

export default new Router({

  linkActiveClass : 'active',
  mode : 'history',
  //路由配置
  routes : [
{
      path : '/me',
      name : 'me',
      component : Me
    },
{
      path : '/index',
      name : 'index',
      component : Index,
      // children : [
      //   {
      //     path : '/me',
      //     component : Me
      //   }
      // ]
    },{
      path : '/',
      component : Index,
      // children : [
      //   {
      //     path : './',
      //     component : Me
      //   }
      // ]
    },{
      path : '/content',
      component : Content
    }
  ]
})