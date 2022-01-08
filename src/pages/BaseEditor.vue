<template>
  <div class="editor_wrap">
    <div class="code_wrap">
      <div id="code_editor">

      </div>
    </div>
    <div class="interface_wrap">
      <div class="settings interface">

      </div>
      <div class="output_image interface">

      </div>
      <div class="buttons">
        <button type="button" class="button outline">Save only</button>
        <button type="button" class="button fill">Tweet</button>
      </div>
    </div>
  </div>
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
.editor_wrap {
  display: flex;
  align-items: center;
  height: 100%;
  .code_wrap {
    flex-grow: 2.3;
    $border_width: 1.7px;
    height: calc(100% - #{$border_width} * 2);
    border: solid $border_width #6B6B6B;
    border-radius: 5px;
  }
  .interface_wrap {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    min-width: 33%;
    height: 100%;
    margin-left: 22.2px;
    div {
      margin-bottom: 22.2px;
    }
    .interface {
      border: solid 1.1px #353549;
      border-radius: 5px;
    }
    .settings {
      flex-grow: 3;
    }
    .output_image {
      flex-grow: 5;
    }
    .buttons {
      flex-grow: 0;
      text-align: center;
      button {
        margin: auto 15px;
        width: 133.333px;
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1.6;
      }
    }
  }
}
</style>
