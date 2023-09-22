import { IconName } from "@/shared/iui-icon/iui-icon.interfaces";

type TagVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export interface Tag {
    prependIcon?: IconName | undefined;
    appendIcon?: IconName | undefined;
    content?: string;
    closable?: boolean;
    variant?: TagVariant;
}