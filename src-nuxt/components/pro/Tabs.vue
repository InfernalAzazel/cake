<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { Icon } from '@iconify/vue';

interface Tab {
  icon?: string;
  title?: string;
  path?: string;
}

interface ProTabsProps {
  storageKey?: string;
}

defineOptions({ name: 'ProTabs', inheritAttrs: false });
const modelValue = defineModel({default: []})
const props = withDefaults(defineProps<ProTabsProps>(), {
  storageKey: 'proTabs',
});
const {storageKey} = toRefs(props)
const tabHistory = useLocalStorage<Tab[]>(storageKey.value, modelValue.value || []);
const selected = useLocalStorage<number>(`${storageKey.value}-selected`, 0);



function handleRemove(index: number) {
  console.log(index);
  if (index >= 0 && index < modelValue.value.length) {
    modelValue.value.splice(index, 1);
    tabHistory.value = [...modelValue.value];
    selected.value = selected.value >= tabHistory.value.length ? tabHistory.value.length - 1 : selected.value;
  }

}

const horizontalScroll = (event: WheelEvent) => {
  const { deltaY } = event;
  const proTabs = document.querySelector('.pro-tabs');
  if (proTabs) {
    proTabs.scrollLeft += deltaY;
  }
};

</script>

<template>
  <div
      class="pro-tabs flex space-x-1 w-full h-[40px] px-[20px] overflow-x-auto overflow-x-hidden  text-ellipsis whitespace-nowrap items-center border-b bg-[var(--owl-main-bg)] scroll-smooth"
      @wheel="horizontalScroll"
  >
    <div
        v-for="(tab, index) in modelValue"
        :key="index"
        class="flex flex-row cursor-pointer items-center pl-2 pr-2 space-x-2 border dark:border-gray-800 rounded hover:border-[var(--primary-onHover)] hover:text-[var(--primary-onHover)]"
        :class="{ 'border-[var(--primary-onActive)] text-[var(--primary-onActive)]': selected === index }"
        @click="()=> selected = index"
        @wheel="horizontalScroll"
    >
      <Icon v-if="tab.icon" :icon="tab.icon" />
      <span>{{ tab.title }}</span>
      <Icon icon="carbon:close" @click.stop="handleRemove(index)" />
    </div>
  </div>
</template>

<style scoped>
</style>