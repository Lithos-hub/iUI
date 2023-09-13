import { Icon } from '@/shared/iui-icon/iui-icon.interfaces';

export interface Badge extends Icon {
	dot?: boolean;
	badgeColor?: string;
	content?: number | string;
}
