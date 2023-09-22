import { Badge } from '@/shared/iui-badge/iui-badge.interfaces';

interface BadgeComponent {
	description: string;
	components_props: Badge[];
	type: string;
}

export const BADGE_SUMMARY: Badge[] = [
	{
		icon: 'chevron',
		badgeColor: 'red',
	},
	{
		icon: 'shopingCart',
		badgeColor: 'green',
		content: '8',
	},
	{
		icon: 'sun',
		badgeColor: 'blue',
	},
	{
		icon: 'heart',
		dot: true,
		badgeColor: 'yellow',
	},
	{
		icon: 'eye',
		content: 123,
		badgeColor: 'pink',
	},
	{
		icon: 'student',
		badgeColor: 'rose',
	},
	{
		icon: 'layers',
		badgeColor: 'purple',
	},
	{
		icon: 'layout',
		content: 123,
		badgeColor: 'amber',
	},
	{
		icon: 'like',
		content: 7,
		badgeColor: 'black',
	},
	{
		icon: 'bulb',
		dot: true,
		badgeColor: 'orange',
	},
];

export const BADGE_VIEW: BadgeComponent[] = [
	{
		type: 'Dot',
		description: `The <code>dot</code> prop is used to set a dot to the Badge. The default value is <code>false</code>.`,
		components_props: [
			{
				icon: 'shopingCart',
				dot: true,
			},
			{
				icon: 'sun',
				dot: false,
			},
		],
	},
	{
		type: 'Color',
		description: `The <code>color</code> prop is used to set a color to the Badge. The default value is <code>white</code>.`,
		components_props: [
			{
				badgeColor: 'red',
				icon: 'chevron',
			},
			{
				badgeColor: 'green',
				icon: 'shopingCart',
			},
			{
				badgeColor: 'blue',
				icon: 'sun',
			},
			{
				badgeColor: 'yellow',
				icon: 'heart',
			},
			{
				badgeColor: 'pink',
				icon: 'eye',
			},
			{
				badgeColor: 'purple',
				icon: 'student',
			},
			{
				badgeColor: 'orange',
				icon: 'layers',
			},
			{
				badgeColor: 'amber',
				icon: 'layout',
			},
			{
				badgeColor: 'black',
				icon: 'like',
			},
			{
				badgeColor: 'gray',
				icon: 'bulb',
			},
		],
	},
	{
		type: 'Content',
		description: `The <code>content</code> prop is used to set a content to the Badge. The default value is <code>''</code>. If the <code>dot</code> prop is set to <code>true</code>, the <code>content</code> prop is ignored. If the <code>content</code> prop is above <code>9</code>, the Badge will display <code>9+</code>.`,
		components_props: [
			{
				icon: 'shopingCart',
				content: 1,
			},
			{
				icon: 'sun',
				content: 5,
			},
			{
				icon: 'heart',
				content: 8,
			},
			{
				icon: 'eye',
				content: 12,
			},
			{
				icon: 'layout',
				content: 22,
			},
			{
				icon: 'like',
				content: 1000,
			},
		],
	},
];
