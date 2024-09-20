import {createGlobalState} from "@vueuse/core";

export const useAdminMenuState = createGlobalState(() => {
        const collapsed = ref(false);
        const toggleCollapsed = () => {
            collapsed.value = !collapsed.value;
        };
        return {
            collapsed,
            toggleCollapsed
        }
    }
);

