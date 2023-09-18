import { IconName } from '@/shared/iui-icon/iui-icon.vue';
import type { ColorName } from '@/interfaces';

export interface Icon {
	icon: IconName;
	color?: ColorName;
}

export interface IconsBundle {
	[key: string]: {
		path: () => string;
		viewport?: string;
	};
}