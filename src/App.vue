<template>
  <TheHeader></TheHeader>
  <main class="view_wrap">
    <router-view/>
  </main>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
// import { onMounted, ref } from "vue"
import TheHeader from "@/components/layouts/TheHeader.vue"
import TheFooter from "@/components/layouts/TheFooter.vue"

// let headerHeight = ref<number | string | undefined>(0)
// let footerHeight = ref<number | string | undefined>(0)

// onMounted(() => {
//   headerHeight.value = document.querySelector(".header_wrap")?.clientHeight.toString() + "px"
//   footerHeight.value = document.querySelector(".footer_wrap")?.clientHeight.toString() + "px"
// })
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: $text;
  background-color: $background;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
}
main.view_wrap {
  margin: 0 13px;
  width: auto;
  max-width: calc(100% - 13px * 2);
  // height: calc(100vh - v-bind(headerHeight) - v-bind(footerHeight));
  height: calc(100vh - $header_height - $footer_height);
}
</style>
