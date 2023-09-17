import { Divider } from '@/shared/iui-divider/iui-divider.interfaces';

interface DividerComponent {
	description: string;
	components_props: Divider[];
	type: string;
}

export const DIVIDER_SUMMARY: Divider[] = [
	{
		color: 'white',
	},
	{
		color: 'red',
	},
	{
		color: 'green',
		variant: 'dashed',
	},
	{
		color: 'blue',
		variant: 'dotted',
	},
	{
		orientation: 'vertical',
	},
	{
		mood: 'light',
	},
	{
		mood: 'neon',
	},
	{
		mood: 'synth',
	},
	{
		mood: 'saw',
	},
];

export const DIVIDER_VIEW: DividerComponent[] = [
	{
		type: 'Color',
		description: `The <code>color</code> prop is used to set a color to the Divider. The default value is <code>white</code>.`,
		components_props: [
			{
				color: 'red',
			},
			{
				color: 'green',
			},
			{
				color: 'blue',
			},
			{
				color: 'yellow',
			},
		],
	},
	{
		type: 'Variant',
		description: `The <code>variant</code> prop is used to set a variant to the Divider. The default value is <code>solid</code>.`,
		components_props: [
			{
				variant: 'solid',
			},
			{
				variant: 'dashed',
			},
			{
				variant: 'dotted',
			},
		],
	},
	{
		type: 'Orientation',
		description: `The <code>orientation</code> prop is used to set a orientation to the Divider. The default value is <code>horizontal</code>.`,
		components_props: [
			{
				orientation: 'horizontal',
			},
			{
				orientation: 'vertical',
			},
		],
	},
	{
		type: 'Mood',
		description: `The <code>mood</code> prop is used to set a specific style to the Divider. The default value is <code>light</code>.`,
		components_props: [
			{
				mood: 'light',
			},
			{
				mood: 'neon',
			},
			{
				mood: 'synth',
			},
			{
				mood: 'saw',
			},
		],
	},
];
