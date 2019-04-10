# 这是我的第一个Vue的练习项目
## 第一次写的这个项目结构有点乱，有些简单实现的功能写的稍微复杂了一点（写完后才发现另外的方法实现更快更方便。。），整个项目写下来vue的基本功能都熟悉了，也对vue有了一个初步的了解

## 安装项目的依赖
```bash
# install dependencies
npm install @vue/cli --save
npm install vue-router --save
npm install axios --save

# run serve at localhost:8080
npm run serve

# build for production with minification
npm run build
```

## 主要用到的的技术有vue,vue-cli,vue-router,axios,SUI-mobile

# 在安装好依赖后，需要使用vue-cli创建一个模板项目
```bash
#先进入项目的目录
cd project-place

vue create project-name
# 接下来选择需要的特性，直接选择默认
>default(babel,eslint)

```

安装完成后，即可看到以下文件结构：
```
·
|--node_modules             //项目所需的模块
|--public                   //存放静态资源，里面的文件不会被Webpack处理，同时引用的时候需要用绝对路径
|  |--favicon.ico
|  |--index.html            //入口页面
|--src
|  |--assets                //也是存放静态资源，但是会被Webpack打包处理
|     |--logo.png           //图片
|--App.vue
|--main.js
|--package.json
|--README.md
·
```
此时项目基本框架已经搭构好了，我们需要将 引用[SUI-Mobile](http://m.sui.taobao.org/)这个CSS框架(目前这个框架已经停止维护了，不建议使用)
```html
<!-- 在public的index.html入口页面导入js文件和css文件，这样我们就可以使用SUI-Mobile框架了 -->
<link rel="stylesheet" href="//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css">
<script type='text/javascript' src='//g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
```
# 路由的创建
```javascript
//在main.js 引入以及挂在路由模块
import router from 'vue-router'
new Vue({
  render: h=> h(App),
  router
}).$mount('#app')
```
然后编写我们的route.js文件

```javascript
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({

  linkActiveClass: 'active',
  //使用history模式可以使 url跳转无需重新加载页面，跳转的时候不会有 /#出现
  mode: 'history',
  //路由配置
  routes:[
    {
      path: '/',
      component:index
    },{
      path: '/me',
      component:me
    },{
      path:'/content',
      component: content
    }
  ]
})

```
这时基本配置已经设置好了，我们就可以愉快的写页面了~~
#结语
最后希望各位可以star一下我的项目。



