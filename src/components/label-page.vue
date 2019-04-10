<template>
  <div class="content">
    <!-- 下拉刷新层 -->
    <div class="content pull-to-refresh-content" data-ptr-distance="55">
      <div class="pull-to-refresh-layer">
        <div class="preloader"></div>
        <div class="pull-to-refresh-arrow"></div>
      </div>
      <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">JavaScript</a>
        <a href="#tab2" class="tab-link button">Vuejs</a>
      </div>

      <div class="content-block">
        <div class="tabs">
          <div id="tab1" class="tab active">
            <div class="content-block" ref="contentCard">
              <!-- 下面是js正文 -->

                <card v-for="fiche in jsData" :key="fiche.id" :fiche="fiche">
                  <!-- <template v-slot:tittle>{{fiche.tittle}}</template> -->
                  <!-- <template v-slot:content>{{fiche.content}}</template> -->
                </card>
            </div>
          </div>

          <div id="tab2" class="tab">
            <div class="content-block">
              <!-- 下面是vuejs正文 -->
                <card v-for="fiche in vueData" :key="fiche.id" :fiche="fiche">
                  <!-- <template v-slot:tittle>{{fiche.tittle}}</template> -->
                  <!-- <template v-slot:content>{{fiche.content}}</template> -->
                </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "./card.vue";
import EventBus from "../EventBus.js";
import Content from "../components/content";
export default {
  components: {
    card
  },
  data() {
    return {
      jsData: {},
      vueData: {}
      // test: "testData"
    };
  },

  methods: {

  },


  // 写入数据
  created() {
    this.$axios
      .get("data/author-info.json")
      .then(res => {
        this.jsData = res.data.jsData;
        this.vueData = res.data.vueData;
        // console.log(this.$root);
      })
      .catch(err => {
        console.log(err);
      });

    // EventBus.$emit('transmit',this.fiche
    // ,data=>{console.log("label page has received the message!")}
    // )
  }
};
</script>

<style scoped>
.content-block {
  padding: 0px;
  margin: 0px;
}
a {
  color: #2c3e50;
}
</style>


