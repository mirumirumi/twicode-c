<template>
  <Header></Header>
  <main class="view-wrap">
    <router-view/>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { ref } from "vue"

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4e4e4e;
}
</style>
