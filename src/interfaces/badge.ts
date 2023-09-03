import { Icon } from ".";

export interface Badge extends Icon {
    dot?: boolean;
    badgeColor?: string;
    content?: number | string;
}