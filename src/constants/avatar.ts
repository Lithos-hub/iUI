import { Avatar } from '@/shared/iui-avatar/iui-avatar.interfaces';

interface AvatarComponent {
	description: string;
	components_props: Avatar[];
	type: string;
}

export const AVATAR_VIEW: AvatarComponent[] = [
	{
		type: 'Icon',
		description: `The <code>icon</code> prop is used to set an icon to the Avatar. The default value is <code>undefined</code>.`,
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
		type: 'Image',
		description: `The <code>image</code> prop is used to set an image to the Avatar. The default value is <code>undefined</code>.`,
		components_props: [
			{
				image: '/dog.jpg',
			},
		],
	},
	{
		type: 'Color',
		description: `The <code>color</code> prop is used to set a color to the Avatar. The default value is <code>white</code>.`,
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
				color: 'teal',
				icon: 'like',
			},
			{
				color: 'indigo',
				icon: 'bulb',
			},
		],
	},
	{
		type: 'Text',
		description: `The <code>text</code> prop is used to set a text to the Avatar. The default value is <code>undefined</code>.`,
		components_props: [
			{
				text: 'CS',
				color: 'red',
			},
			{
				text: 'LA',
				color: 'green',
			},
			{
				text: 'PM',
				color: 'blue',
			},
			{
				text: 'TR',
				color: 'yellow',
			},
			{
				text: 'CN',
				color: 'pink',
			},
			{
				text: 'AS',
				color: 'purple',
			},
			{
				text: 'EW',
				color: 'orange',
			},
			{
				text: 'PM',
				color: 'amber',
			},
			{
				text: 'SE',
				color: 'gray',
			},
			{
				text: 'YT',
				color: 'teal',
			},
		],
	},
	{
		type: 'Size',
		description: `The <code>size</code> prop is used to set a size to the Avatar with a numeric value (number or string). The default value is <code>50</code> and the maximum is <code>80</code>.`,
		components_props: [
			{
				size: 10,
				image: '/dog.jpg',
			},
			{
				size: 20,
				image: '/dog.jpg',
			},
			{
				size: 30,
				image: '/dog.jpg',
			},
			{
				size: 40,
				image: '/dog.jpg',
			},
			{
				size: 50,
				image: '/dog.jpg',
			},
			{
				size: 60,
				image: '/dog.jpg',
			},
			{
				size: 70,
				image: '/dog.jpg',
			},
			{
				size: 80,
				image: '/dog.jpg',
			},
		],
	},
];
