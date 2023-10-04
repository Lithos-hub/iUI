import { ColorName } from '@/interfaces';
import { IconName } from '@/shared/iui-icon/iui-icon.interfaces';

export interface Badge {
	dot?: boolean;
	badgeColor?: ColorName;
	content?: number | string;
	icon?: IconName;
}
