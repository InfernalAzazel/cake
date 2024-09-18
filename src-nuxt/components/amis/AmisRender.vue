<script lang="ts" setup>
import {  onMounted } from "vue";
import 'amis/sdk/sdk.js';
import 'amis/lib/themes/default.css';
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
  <div id="box"></div>
</template>
<style>
</style>

