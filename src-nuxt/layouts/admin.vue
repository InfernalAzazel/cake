<script setup lang="ts">
import { ref } from 'vue'

const { t } = useI18n()
const fullscreenRef = ref<HTMLElement | null>(null)

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon('ion:chevron-up-outline')
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon('ion:chevron-up-outline'),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon('ion:chevron-up-outline'),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon('ion:chevron-up-outline'),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon('ion:chevron-up-outline'),

          },
          {
            label: '羊男',
            key: 'sheep-man',

          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon('ion:chevron-up-outline'),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const collapsed = ref(false)

const amisjson={
  "type": "page",
  "body": [
    {
      "type": "button-toolbar",
      "className": "block",
      "buttons": [
        {
          "type": "button",
          "label": "左侧弹出-极小框",
          "actionType": "drawer",
          "drawer": {
            "position": "left",
            "size": "xs",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "左侧弹出-小框",
          "actionType": "drawer",
          "drawer": {
            "position": "left",
            "size": "sm",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "左侧弹出-中框",
          "actionType": "drawer",
          "drawer": {
            "position": "left",
            "size": "md",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "左侧弹出-大框",
          "actionType": "drawer",
          "drawer": {
            "position": "left",
            "size": "lg",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "左侧弹出-超大",
          "actionType": "drawer",
          "level": "danger",
          "drawer": {
            "position": "left",
            "size": "xl",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        }
      ]
    },
    {
      "type": "button-toolbar",
      "className": "block m-t",
      "buttons": [
        {
          "type": "button",
          "label": "右侧弹出-极小框",
          "level": "success",
          "actionType": "drawer",
          "drawer": {
            "position": "right",
            "size": "xs",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "右侧弹出-小框",
          "level": "success",
          "actionType": "drawer",
          "drawer": {
            "position": "right",
            "size": "sm",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "右侧弹出-中框",
          "level": "success",
          "actionType": "drawer",
          "drawer": {
            "position": "right",
            "size": "md",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "右侧弹出-大框",
          "level": "success",
          "actionType": "drawer",
          "drawer": {
            "position": "right",
            "size": "lg",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "右侧弹出-超大",
          "level": "danger",
          "actionType": "drawer",
          "drawer": {
            "size": "xl",
            "position": "right",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        }
      ]
    },
    {
      "type": "button-toolbar",
      "className": "block m-t",
      "buttons": [
        {
          "type": "button",
          "label": "顶部弹出-极小框",
          "actionType": "drawer",
          "level": "info",
          "drawer": {
            "position": "top",
            "size": "xs",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "顶部弹出-小框",
          "level": "info",
          "actionType": "drawer",
          "drawer": {
            "position": "top",
            "size": "sm",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "顶部弹出-中框",
          "actionType": "drawer",
          "level": "info",
          "drawer": {
            "position": "top",
            "size": "md",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "顶部弹出-大框",
          "actionType": "drawer",
          "level": "info",
          "drawer": {
            "position": "top",
            "size": "lg",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "顶部弹出 - 超大",
          "level": "danger",
          "actionType": "drawer",
          "drawer": {
            "position": "top",
            "size": "xl",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        }
      ]
    },
    {
      "type": "button-toolbar",
      "className": "block m-t",
      "buttons": [
        {
          "type": "button",
          "label": "底部弹出-极小框",
          "actionType": "drawer",
          "level": "primary",
          "drawer": {
            "position": "bottom",
            "size": "xs",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "底部弹出-小框",
          "level": "primary",
          "actionType": "drawer",
          "drawer": {
            "position": "bottom",
            "size": "sm",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "底部弹出-中框",
          "actionType": "drawer",
          "level": "primary",
          "drawer": {
            "position": "bottom",
            "size": "md",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "底部弹出-大框",
          "actionType": "drawer",
          "level": "primary",
          "drawer": {
            "position": "bottom",
            "size": "lg",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        },
        {
          "type": "button",
          "label": "底部弹出-超大",
          "level": "danger",
          "actionType": "drawer",
          "drawer": {
            "position": "bottom",
            "size": "xl",
            "title": "提示",
            "body": "这是个简单的弹框"
          }
        }
      ]
    },
    {
      "type": "button-toolbar",
      "className": "block m-t",
      "buttons": [
        {
          "type": "button",
          "label": "多级弹框",
          "actionType": "drawer",
          "level": "danger",
          "drawer": {
            "title": "提示",
            "body": "这是个简单的弹框",
            "closeOnEsc": true,
            "actions": [
              {
                "type": "button",
                "actionType": "confirm",
                "label": "确认",
                "primary": true
              },
              {
                "type": "button",
                "actionType": "drawer",
                "label": "再弹一个",
                "drawer": {
                  "position": "left",
                  "title": "弹框中的弹框",
                  "closeOnEsc": true,
                  "body": "如果你想，可以无限弹下去",
                  "actions": [
                    {
                      "type": "button",
                      "actionType": "drawer",
                      "label": "来吧",
                      "level": "info",
                      "drawer": {
                        "position": "right",
                        "title": "弹框中的弹框",
                        "closeOnEsc": true,
                        "body": "如果你想，可以无限弹下去",
                        "actions": [
                          {
                            "type": "button",
                            "actionType": "confirm",
                            "label": "可以了",
                            "primary": true
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "type": "button",
          "label": "交叉测试",
          "actionType": "drawer",
          "className": "m-l-xs",
          "level": "danger",
          "drawer": {
            "title": "提示",
            "closeOnEsc": true,
            "body": "这是个简单的弹框",
            "actions": [
              {
                "type": "button",
                "actionType": "confirm",
                "label": "确认",
                "primary": true
              },
              {
                "type": "button",
                "actionType": "dialog",
                "closeOnEsc": true,
                "label": "再弹一个",
                "dialog": {
                  "position": "left",
                  "title": "弹框中的弹框",
                  "closeOnEsc": true,
                  "body": "如果你想，可以无限弹下去",
                  "actions": [
                    {
                      "type": "button",
                      "actionType": "drawer",
                      "label": "来吧",
                      "level": "info",
                      "drawer": {
                        "position": "right",
                        "title": "弹框中的弹框",
                        "body": "如果你想，可以无限弹下去",
                        "closeOnEsc": true,
                        "actions": [
                          {
                            "type": "button",
                            "actionType": "confirm",
                            "label": "可以了",
                            "primary": true
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "type": "button",
          "label": "可拉拽调整大小",
          "actionType": "drawer",
          "level": "danger",
          "drawer": {
            "title": "提示",
            "closeOnEsc": true,
            "resizable": true,
            "body": "这是个简单的弹框"
          }
        }
      ]
    }
  ]
}

const generateTabs = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    icon: 'ion:ellipsis-vertical-sharp',
    title: `Title ${i + 1}`
  }))
}
const tabs = ref(generateTabs())

const languageOptions = [
  {
    label: '中文',
    key: 'zh-CN',
  },
  {
    label: 'English',
    key: 'en-US',
  },
]

</script>

<template>
  <div ref="fullscreenRef" style="height: 50vh;">
    <ProLayout v-model:collapsed="collapsed" :menus="menuOptions" :title="t('common.title')">
      <template #actions>
        <pro-toggle-theme />
        <pro-toggle-full-screen :target="fullscreenRef"/>
        <pro-toggle-language :options="languageOptions"/>
        <pro-avatar :options="[]" name="admin"/>
      </template>
      <template #footer>
        © 2024 Your Company. All rights reserved.
      </template>
      <ProTabs v-model="tabs"/>
        <client-only>
          <AmisRender :amisjson="amisjson"></AmisRender>
        </client-only>
    </ProLayout>
  </div>
</template>
