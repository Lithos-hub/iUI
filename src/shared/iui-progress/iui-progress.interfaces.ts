import { ColorName } from "@/interfaces";

export interface Progress {
    indeterminate?: boolean;
    value?: number;
    color?: ColorName;
    displayValue?: boolean;
}