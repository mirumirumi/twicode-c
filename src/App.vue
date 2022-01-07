<template>
  <Header></Header>
  <main class="view_wrap">
    <router-view/>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from "@/components/layouts/Header.vue"
import Footer from "@/components/layouts/Footer.vue"
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
</style>
