import { IconName } from "@/components/Icon.vue";


export interface Avatar {
    image?: string;
    color?: string;
    icon?: IconName;
    size?: number | string;
    text?: string;
}