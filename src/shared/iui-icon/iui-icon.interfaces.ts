import type { ColorName } from '@/interfaces';

export type IconName = 
	'vue' |
	'vite' |
	'typescript' |
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
	'alertCircle' |
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