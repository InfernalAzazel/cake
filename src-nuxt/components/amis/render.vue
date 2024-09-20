<script lang="ts" setup>
import {  onMounted } from "vue";
import 'amis/sdk/sdk.js';
import "assets/css/theme.css";
const props= defineProps({
  amisjson: {
    type: Object,
    required: true
  }
})


onMounted(() => {
  // @ts-ignore
  const amis = amisRequire('amis/embed');
  amis.embed('#box', props.amisjson);
})

</script>
<template>
  <div class="dark:bg-black" id="box"></div>
</template>
<style>

</style>

