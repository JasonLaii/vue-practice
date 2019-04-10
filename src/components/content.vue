<template>
  <div class="page-group">
    <header class="bar bar-nav">
      <!-- <router-link to="index">
        <span class="icon icon-left pull-left"></span>
      </router-link> -->
      <!-- <a href="/index" class="icon icon-left pull-left"></a> -->
      <span @click.prevent= "goBack" class="icon icon-left pull-left"></span>
      <h1 class="title">Content</h1>
    </header>

    <div class="content">
      <!-- tittle -->
      <div>
        <p class="content-title">
          <!-- 欧文杜兰特共赴纽约！勇士悍将不满遭禁赛 -->
          {{fiche.tittle}}
        </p>
        <p class="author-info">
          <span>原创：</span>
          <a href="#">
            <span>justin</span>
          </a>
          <span>today</span>
        </p>
      </div>
      <!-- main -->
      <div class="main">
        <p class="content-main">
          {{fiche.content}}
          <!-- 当然这些明星确实也在我们国家红极一时，就拿李成敏来说，她曾经被称为“亚洲第一女神”，虽然没有金喜善等人来得出名，但李成敏也无非是一号美女！精致的五官下加上完美的身材，一位典型的东方美女！在2014年的全球最美女星的评选上更是成为了第二名，也是第一位的亚洲女星，所以很多粉丝都去喊她为亚洲女神，可以讲是非常好看了。 -->
        </p>
        <img src="../assets/justin.jpg" alt>
        <p
          class="content-main"
        >别看她是一个小女生，私下里的她可是很喜欢锻炼哦！看这个动作，明显是练过的，非常的标准，而且她穿运动装真的是很性感啊有没有，很多男同胞是不是心动啦哈哈，难怪身材能够保持的这么好，和经常锻炼肯定是分不开的！但是大家能想到这么漂亮这么优秀的一位小姐姐，在感情方面却是单纯的像一张白纸吗？</p>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from "../EventBus.js";
export default {
  data() {
    return {
      fiche: {}
    };
  },
  // props:["fiche"],
  created() {
    this.fiche = this.$route.query.fiche;
    // console.log(this.$route.query.fiche);
  },
  destroyed(){
    // alert("实例已被销毁")
  },

  methods: {
    goBack() {
      this.$router.go(-1);
      // window.history.go(-1);
      // 销毁实例
      this.$destroy();
    },

  },
  // beforeRouteLeave(to,from,next){
  //   to.path == "index" ?this.$router.push({path : "index"}) :next();
  // }
};
</script>
<style scoped>
.content {
  text-align: left;
  margin: 10px 10px 0 10px;
}
.content a span {
  padding: 0 10px;
}
.content-title {
  font-size: 22px;
}
.content-main {
  text-indent: 2em;
}
.main img {
  width: 100%;
  height: 100%;
  /* max-width: 100%; */
}
</style>
