import {createGlobalState, useCssVar} from "@vueuse/core";
import type {GlobalThemeOverrides} from "naive-ui";


export const useSettingsState = createGlobalState(() => {

        const locale = useLocalStorage('locale', 'zh_CN')
        const access_token = useLocalStorage('access_token', '')

        const themeOverrides = useLocalStorage<GlobalThemeOverrides>('theme', {
            common: {
                primaryColor: '#cd18ff',
                primaryColorHover: '#CF523A',
                primaryColorPressed: '#963C2A',
            },
        })
        const primaryColor = useCssVar('--colors-brand-5')
        const primaryColorHover = useCssVar('--colors-brand-6')
        const primaryColorPressed = useCssVar('--colors-brand-4')

        function initSettings() {
            primaryColor.value = themeOverrides.value.common?.primaryColor
            primaryColorHover.value = themeOverrides.value.common?.primaryColorHover
            primaryColorPressed.value = themeOverrides.value.common?.primaryColorPressed
        }

        return {
            locale,
            access_token,
            themeOverrides,
            initSettings
        }
    }
);
