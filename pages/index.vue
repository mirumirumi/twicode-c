<template>
  <div class="">
    {{ hello }}
    <NuxtLink to="/terms">terms</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const hello = ref("index")

</script>

<style lang="scss" scoped>

</style>
