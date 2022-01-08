<template>
  <div></div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStore } from '@/store/xxx';
import axios from 'axios';

const p = defineProps<{
  new: boolean,
}>()

const isNew = ref(p.new)



</script>

<style lang="scss" scoped>

</style>
