<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
import index from "./components/index";
import me from "./views/me";
import barItem from "./components/bar-item"
import { Promise } from "q";

export default {
  name: "app",
  components: {
    index,
    me,
    barItem
  },
  data() {
    return {

    };
  },

  methods: {

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
