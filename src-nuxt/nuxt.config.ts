import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import { i18n } from './i18n/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        'nuxtjs-naive-ui',
        '@unocss/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/i18n',
    ],
    vite: {
        plugins: [
            AutoImport({
                imports: [
                    {
                        'naive-ui': [
                            'useDialog',
                            'useMessage',
                            'useNotification',
                            'useLoadingBar'
                        ]
                    }
                ]
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            })
        ]
    },
    imports: {
        dirs: [
            'composables/**/*',
        ],
    },
    routeRules: {
        '/': {prerender: true},
        // '/admin/**': {ssr: false},
        '/admin': {ssr: false},
    },
    css: [
        '@unocss/reset/tailwind-compat.css',
    ],
    i18n,
})
