<!-- HTML-->
<template>
  <div>
    <!-- page集合的容器，里面放多个平行的.page，其他.page作为内联页面由路由控制展示 -->
    <div class="page-group">
      <!-- 单个page ,第一个.page默认被展示-->
      <div class="page">
        <!-- 标题栏 -->
        <header class="bar bar-nav">
          <a class="icon icon-me pull-left open-panel"></a>
          <h1 class="title">Home</h1>
        </header>

        <!-- botton-bar -->
        <nav class="bar bar-tab">
          <bar-item icon="home" label="home" href="/index" class="active"></bar-item>
          <bar-item icon="me" label="me" href="/me"></bar-item>
        </nav>

        <!-- 这里是页面内容区 -->
          <label-page ></label-page >
      </div>

      <!-- 其他的单个page内联页（如果有） -->
      <div class="page">...</div>
    </div>

    <!-- popup, panel 等放在这里 -->
    <div class="panel-overlay"></div>
    <!-- Left Panel with Reveal effect -->
    <div class="panel panel-left panel-reveal">
      <div class="content-block">
        <p>这是一个侧栏</p>
        <p></p>
        <!-- Click on link with "close-panel" class will close panel -->
        <p>
          <a href="#" class="close-panel">关闭</a>
        </p>
      </div>
    </div>
  </div>
</template>

<!-- js-->
<script>
import labelPage from "./label-page";
import barItem from "./bar-item";
import card from "./card.vue";
import EventBus from "../EventBus.js";
export default {
  components: {
    labelPage,
    barItem,
    card
  },
  methods: {

  },
  data() {
    return {};
  },
  created() {
    // EventBus.$emit('transmit',)
  },
  // watch : {
  //   "$router" : {
  //     handler(route){
  //       var that = this;
  //       if(route.path == "/"){
  //         that.init();
  //       }
  //     }
  //   }
  // }
};
</script>

<!-- css-->
<style>
</style>
