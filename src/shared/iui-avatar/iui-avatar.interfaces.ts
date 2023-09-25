import { IconName } from '@/shared/iui-icon/iui-icon.interfaces';
import type { ColorName } from '@/interfaces';

export interface Avatar {
	image?: string;
	color?: ColorName;
	icon?: IconName;
	size?: number | string;
	text?: string;
}
