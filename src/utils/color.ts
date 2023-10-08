import { TAILWIND_COLORS } from '@/constants/colors';
import { ColorName, TailwindColors } from '@/interfaces';
import { RGB } from './color.interfaces';

export const getTailwindColor = (color: ColorName, shade?: string | number): string => {
	if (color === 'black' || color === 'white') return TAILWIND_COLORS[color] as string;

	const colorValue = TAILWIND_COLORS[color] as TailwindColors;
	return colorValue[(shade ? shade.toString() : '500') as keyof typeof colorValue] as string;
};

export const hexToRgb = (hex: string): RGB | null => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
};
