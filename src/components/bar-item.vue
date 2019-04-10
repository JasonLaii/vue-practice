<template>

      <a class="tab-item external" href="#">
        <span class="icon" :class="iconClass"></span>
        <span class="tab-label" v-text="label"></span>
      </a>

</template>

<script>
export default {
  props: {
    icon: "",
    label: "",
    path: ""
  },
  computed: {
    iconClass() {
      return "icon-" + this.icon;
    }
  }
};
</script>

<style>
</style>
