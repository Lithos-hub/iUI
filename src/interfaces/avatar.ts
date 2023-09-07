import { IconName } from "@/components/Icon.vue";
import type { ColorName } from ".";


export interface Avatar {
    image?: string;
    color?: ColorName;
    icon?: IconName;
    size?: number | string;
    text?: string;
}