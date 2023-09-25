import { Icon } from '@/shared/iui-icon/iui-icon.interfaces';

interface IconComponent {
	description: string;
	components_props: Icon[];
	type: string;
}

export const ICON_VIEW: IconComponent[] = [
	{
		type: 'Icon',
		description: `The <code>icon</code> prop is used to set a specific icon. `,
		components_props: [
			{
				icon: 'chevron',
			},
			{
				icon: 'shopingCart',
			},
			{
				icon: 'sun',
			},
			{
				icon: 'heart',
			},
			{
				icon: 'eye',
			},
			{
				icon: 'student',
			},
			{
				icon: 'layers',
			},
			{
				icon: 'layout',
			},
			{
				icon: 'like',
			},
			{
				icon: 'bulb',
			},
		],
	},
	{
		type: 'Color',
		description: `The <code>color</code> prop is used to set a color to the Icon. The default value is <code>white</code>.`,
		components_props: [
			{
				color: 'red',
				icon: 'chevron',
			},
			{
				color: 'green',
				icon: 'shopingCart',
			},
			{
				color: 'blue',
				icon: 'sun',
			},
			{
				color: 'yellow',
				icon: 'heart',
			},
			{
				color: 'pink',
				icon: 'eye',
			},
			{
				color: 'purple',
				icon: 'student',
			},
			{
				color: 'orange',
				icon: 'layers',
			},
			{
				color: 'amber',
				icon: 'layout',
			},
			{
				color: 'black',
				icon: 'like',
			},
			{
				color: 'gray',
				icon: 'bulb',
			},
		],
	},
];
