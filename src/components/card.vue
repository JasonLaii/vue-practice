<template>
  <!-- 下面是正文 -->
  <router-link :to="{
    path : '/content',
    query :{
      fiche : this.fiche
    }
  }">
  <div class="card-container">
    <div class="card">
      <div class="card-header">
        <!-- <slot name="tittle"></slot> -->
        {{fiche.tittle}}
      </div>
      <div class="card-content">
        <div class="card-content-inner">
          <!-- <slot name="content"></slot> -->
          {{fiche.content}}
        </div>
      </div>
    </div>
  </div>
  </router-link>
</template>

<script>
import { setTimeout } from "timers";
import EventBus from "../EventBus.js";

export default {
  data() {
    return {
      // fiche : {},
      // vueData : {},
      // jsData : {}
    };
  },
  props: ["fiche"],
  mounted() {
    
    // EventBus.$emit("transmit", this.fiche);
    // // console.log(this.fiche);
  },
  methods: {
    // eventSend() {
    //   console.log("Card page have send the message, please check!");
    //   EventBus.$emit("transmit", this.fiche);
    // }

    gotoUrl() {
      this.$router.push({
        path: "/content",
        query: {
          fiche: this.fiche
        }
      });
    }
  }
};
</script>

<style>
</style>
