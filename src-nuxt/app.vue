<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
import {useDark} from "@vueuse/core";
import type {BuiltInGlobalTheme} from "naive-ui/es/themes/interface";

const {themeOverrides, initSettings} = useSettingsState()
const isDark = useDark()
const theme = ref<BuiltInGlobalTheme | null>(null)

watch(isDark, (newVal) => {
  theme.value =  newVal? darkTheme : null
}, {immediate: true})

onMounted(()=> initSettings())

</script>

<template>
  <NConfigProvider
      :inline-theme-disabled="true"
      :theme-overrides="themeOverrides"
      :theme="theme"
  >
    <!--      <NuxtLoadingIndicator :color="themeColor" />-->

    <NMessageProvider>
      <NNotificationProvider>
        <NDialogProvider>
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </NDialogProvider>
      </NNotificationProvider>
    </NMessageProvider>
    <NGlobalStyle />
  </NConfigProvider>
<!--  <client-only>-->
<!--    <AmisReanderer :amisjson="amisjson"></AmisReanderer>-->
<!--  </client-only>-->
</template>

