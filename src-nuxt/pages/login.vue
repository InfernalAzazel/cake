<script setup lang="ts">
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import type { FormInst, FormRules } from 'naive-ui'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
const formRef = ref<FormInst>()
const message = useMessage()

interface LoginForm {
  username: string
  password: string
}

const formValue = ref<LoginForm>({
  username: '',
  password: ''
})

const rules: FormRules = {
  username: [
    {
      required: true,
      message: t('pages.login.form.username.rule'),
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: t('pages.login.form.password.rule'),
      trigger: 'blur'
    }
  ]
}



const handleSubmit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success(t('pages.login.form.validate.success'))
    } else {
      message.error(t('pages.login.form.validate.error'))
    }
  })
}
</script>

<template>
  <pro-b-g
      class="flex w-full h-screen items-center justify-center"
  >
    <n-card class="w-[350px] rounded-lg">
      <div class="flex justify-center items-center mb-6">
        <!-- 左侧图标 -->
        <n-icon size="48">
          <Icon icon="devicon:antdesign" />
        </n-icon>
        <div class="flex-grow"/>
        <!-- 右侧文字 -->
        <div class="ml-4 text-2xl">
          {{t('common.title')}}
        </div>
      </div>
      <n-form :model="formValue" :rules="rules" ref="formRef">
        <n-form-item :label="t('pages.login.form.username.label')" path="username">
          <n-input v-model:value="formValue.username" :placeholder="t('pages.login.form.username.placeholder')" >
            <template #prefix>
              <n-icon>
                <Icon icon="mdi:account" />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>

        <n-form-item :label="t('pages.login.form.password.label')" path="password">
          <n-input v-model:value="formValue.password" type="password" :placeholder="t('pages.login.form.password.placeholder')">
            <template #prefix>
              <n-icon>
                <Icon icon="mdi:lock" />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button
              class="w-full"
              type="primary"
              @click="handleSubmit"
              @keydown.enter.prevent
          >
            {{t('pages.login.sign_in')}}
          </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </pro-b-g>
</template>


<style scoped>
</style>