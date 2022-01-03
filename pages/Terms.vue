<template>
  <div class="">
    {{ hello }}
    <NuxtLink to="/">index</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const hello = ref("terms")

</script>

<style lang="scss" scoped>

</style>
