<template>
  <TheHeader></TheHeader>
  <main class="view_wrap">
    <router-view/>
  </main>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import TheHeader from "@/components/layouts/TheHeader.vue"
import TheFooter from "@/components/layouts/TheFooter.vue"
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: $text;
  background-color: $background;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Open Sans", Helvetica, "Lucida Sans Unicode", "Lucida Grande", Arial, Verdana, sans-serif;
  width: 100vw;
  height: 100vh;
}
main.view_wrap {
  margin: 0 13px;
  width: auto;
  max-width: calc(100% - 13px * 2);
  height: calc(100vh - #{$header_height} - #{$footer_height});
}
</style>
