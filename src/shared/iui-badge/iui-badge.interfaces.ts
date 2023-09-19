import { ColorName } from '@/interfaces';
import { Icon } from '@/shared/iui-icon/iui-icon.interfaces';

export interface Badge extends Icon {
	dot?: boolean;
	badgeColor?: ColorName;
	content?: number | string;
}
