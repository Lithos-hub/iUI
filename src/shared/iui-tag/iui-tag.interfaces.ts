import { IconName } from "../iui-icon/iui-icon.vue";

type TagVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export interface Tag {
    prependIcon?: IconName;
    appendIcon?: IconName;
    content?: string;
    closable?: boolean;
    variant?: TagVariant;
}