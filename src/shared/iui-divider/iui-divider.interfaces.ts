import { ColorName } from '@/interfaces';

export interface Divider {
	orientation?: 'horizontal' | 'vertical';
	variant?: 'solid' | 'dashed' | 'dotted';
	color?: ColorName;
	mood?: 'light' | 'neon' | 'synth' | 'saw';
}
