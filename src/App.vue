<template>
  <Header></Header>
  <main class="view-wrap">
    <router-view/>
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4e4e4e;
}
</style>
