import {Icon} from "@iconify/vue";

export function renderIcon(icon: string, height: number = 24, width: number = 24) {
    return () => {
        return h(Icon, {icon: icon, height: height, width: width});
    }
}