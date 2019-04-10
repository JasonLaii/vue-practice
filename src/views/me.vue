<template>
  <div>
    <!-- page集合的容器，里面放多个平行的.page，其他.page作为内联页面由路由控制展示 -->
    <div class="page-group">
      <!-- 单个page ,第一个.page默认被展示-->
      <div class="page">
        <!-- 标题栏 -->
        <header class="bar bar-nav">
          <!-- <a class="icon icon-me pull-left open-panel"></a> -->
          <h1 class="title">Me</h1>
        </header>

        <!-- 底部工具栏 -->
        <nav class="bar bar-tab">
          <bar-item label="home" icon="home" href="/index"></bar-item>
          <bar-item label="me" icon="me" href="/me" class="active"></bar-item>
        </nav>

        <!-- 这里是页面内容区 -->
        <div class="content">
          <div class="content-block">
            <div class="author">
              <img v-bind:src="userData.bgSrc" alt="background">
              <!-- <img :src= "userData.bgSrc" alt=""> -->
              <!-- 个人信息 -->
              <div class="author-info">
                <div class="author-photo">
                  <img v-bind:src="userData.authorPhotoSrc" alt="author photo">
                  <!-- <img :src= "userData.authorPhotoSrc" alt=""> -->
                </div>
                <p>justin</p>
                <span>singer jusinloo</span>
              </div>

              <!-- 订阅 -->
              <div class="subscribe">
                <div class="author-subscribe">
                  <span class="num">{{userData.score}}</span>
                  <span>score</span>
                </div>
                <div class="author-subscribe">
                  <span class="num">{{userData.following}}</span>
                  <span>following</span>
                </div>
                <div class="author-subscribe">
                  <span class="num">{{userData.follower}}</span>
                  <span>follower</span>
                </div>
              </div>
            </div>

            <!-- 功能 -->
            <div class="author-features"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 平行page -->
    <!-- popup, panel 等放在这里 -->
    <!-- <div class="panel-overlay"></div> -->
    <!-- Left Panel with Reveal effect -->
    <!-- <div class="panel panel-left panel-reveal">
      <div class="content-block">
        <p>这是一个侧栏</p>
    <p></p>-->
    <!-- Click on link with "close-panel" class will close panel -->
    <!-- <p>
          <a href="#" class="close-panel">关闭</a>
        </p>
    </div>-->
    <!-- </div> -->
  </div>
</template>

<script>
import barItem from "../components/bar-item";
import axios from "axios";
export default {
  name: "me",
  components: {
    barItem
  },
  data() {
    return {
      userData: {
        bgSrc : require("../assets/background.jpg"),
        authorPhotoSrc : require("../assets/justin.jpg"),
        // dont work
        //静态资源文件直接指向 public文件夹
        // bgSrc: "../../static/image/background.jpg",
        // authorPhotoSrc: "../../static/image/justin.jpg",
        //work
        // bgSrc : "image/background.jpg",
        // authorPhotoSrc : "image/justin.jpg",
        nickName: "justin",
        describe: "singer jusinloo",
        score: "10",
        following: "2",
        follower: "100"
      }
    };
  },
  mounted() {}
};
</script>

<style scoped>
/* *{
  font-family :-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
} */
.page-group {
  background: #cccccc;
}
.content-block {
  padding: 0px;
  margin: 0px;
}
.author {
  height: 406px;
  position: relative;
}
.author img {
  height: 100%;
  width: 100%;
  max-height: 202px;
}

.author-info {
  text-align: center;
  position: absolute;
  left: 40%;
  top: 162px;
  /* 弹性盒模型 */
  display: flex;
  align-items: center;
  flex-flow: column;
}
.author-info p {
  color: black;
  font-weight: 750;
  margin: 0px;
  padding: 0px;
  font-size: 20px;
}
.author-info span {
  font-size: 14px;
}
.author-photo img {
  height: 80px;
  width: 80px;
  border-radius: 45px;
}
.subscribe {
  padding-top: 90px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.author-subscribe {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.author-subscribe span {
  font-size: 18px;
  color: black;
}
.author-subscribe .num {
  font-size: 14px;
}
</style>

