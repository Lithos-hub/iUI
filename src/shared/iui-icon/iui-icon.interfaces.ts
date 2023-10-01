import type { ColorName } from '@/interfaces';

export type IconName = 
	'vue' |
	'vite' |
	'typescript' |
	'github' |
	'chevron' |
	'close' |
	'shopingCart' |
	'sun' |
	'heart' |
	'eye' |
	'student' |
	'layers' |
	'layout' |
	'like' |
	'bulb' |
	'check' |
	'alertTriangle' |
	'alertHexagon' |
	'informationCircle' |
	'checkmarkCircle'

export interface Icon {
	icon: IconName;
	color?: ColorName;
}

export type IconsBundle = Record<string, {
	path: () => string;
	viewport?: string;
}>;