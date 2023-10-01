import ButtonComponent from '@/shared/iui-button/iui-button.vue';
import BadgeComponent from '@/shared/iui-badge/iui-badge.vue';
import IconComponent from '@/shared/iui-icon/iui-icon.vue';
import AvatarComponent from '@/shared/iui-avatar/iui-avatar.vue';
import DividerComponent from '@/shared/iui-divider/iui-divider.vue';
import TagComponent from '@/shared/iui-tag/iui-tag.vue';
import AlertComponent from '@/shared/iui-alert/iui-alert.vue';
import ProgressComponent from '@/shared/iui-progress/iui-progress.vue';
import SpinnerComponent from '@/shared/iui-spinner/iui-spinner.vue';
import SkeletonComponent from '@/shared/iui-skeleton/iui-skeleton.vue';

import { Button } from '@/shared/iui-button/iui-button.interfaces';
import { Badge } from '@/shared/iui-badge/iui-badge.interfaces';
import { Icon } from '@/shared/iui-icon/iui-icon.interfaces';
import { Avatar } from '@/shared/iui-avatar/iui-avatar.interfaces';
import { Divider } from '@/shared/iui-divider/iui-divider.interfaces';
import { Tag } from '@/shared/iui-tag/iui-tag.interfaces';
import { Alert } from '@/shared/iui-alert/iui-alert.interfaces';
import { Progress } from '@/shared/iui-progress/iui-progress.interfaces';
import { Spinner } from '@/shared/iui-spinner/iui-spinner.interfaces';
import { Skeleton } from '@/shared/iui-skeleton/iui-skeleton.interfaces';


type ComponentProps = Button | Icon | Badge | Avatar | Divider | Tag | Alert | Progress | Spinner | Skeleton;

type Component =
	| typeof ButtonComponent
	| typeof IconComponent
	| typeof BadgeComponent
	| typeof AvatarComponent
	| typeof DividerComponent
	| typeof TagComponent
	| typeof AlertComponent
	| typeof ProgressComponent
	| typeof SpinnerComponent
	| typeof SkeletonComponent;

type Components = {
	component: Component;
	props: ComponentProps;
};

interface PlaygroundComponent {
	category: string;
	to: string;
	components: Components[];
}

export const playgroundComponents: PlaygroundComponent[] = [
	{
		category: 'Button',
		to: 'iui:button',
		components: [
			{
				component: ButtonComponent,
				props: {
					variant: 'solid',
					text: 'Solid button',
				},
			},
			{
				component: ButtonComponent,
				props: {
					variant: 'ghost',
					text: 'Ghost button',
				},
			},
			{
				component: ButtonComponent,
				props: {
					variant: 'synth',
					text: 'Synth button',
				},
			},
		],
	},
	{
		category: 'Icon',
		to: 'iui:icon',
		components: [
			{
				component: IconComponent,
				props: {
					icon: 'bulb',
					color: 'yellow',
				},
			},
			{
				component: IconComponent,
				props: {
					icon: 'checkmarkCircle',
					color: 'green',
				},
			},
			{
				component: IconComponent,
				props: {
					icon: 'heart',
					color: 'red',
				},
			},
		],
	},
	{
		category: 'Badge',
		to: 'iui:badge',
		components: [
			{
				component: BadgeComponent,
				props: {
					dot: true,
					icon: 'heart',
					badgeColor: 'green',
				},
			},
			{
				component: BadgeComponent,
				props: {
					content: 10,
					icon: 'shopingCart',
					badgeColor: 'red',
				},
			},
			{
				component: BadgeComponent,
				props: {
					icon: 'typescript',
					badgeColor: 'orange',
				},
			},
		],
	},
	{
		category: 'Avatar',
		to: 'iui:avatar',
		components: [
			{
				component: AvatarComponent,
				props: {
					image:
						'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
					size: '40',
				},
			},
			{
				component: AvatarComponent,
				props: {
					image:
						'https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80',
					size: '50',
				},
			},
			{
				component: AvatarComponent,
				props: {
					image:
						'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80',
					size: '60',
				},
			},
		],
	},
	{
		category: 'Divider',
		to: 'iui:divider',
		components: [
			{
				component: DividerComponent,
				props: {
					color: 'blue',
					variant: 'dashed',
				},
			},
			{
				component: DividerComponent,
				props: {
					orientation: 'vertical',
					color: 'blueGray',
				},
			},
			{
				component: DividerComponent,
				props: {
					color: 'red',
					mood: 'neon',
				},
			},
		],
	},
	{
		category: 'Tag',
		to: 'iui:tag',
		components: [
			{
				component: TagComponent,
				props: {
					content: 'Item 1',
					variant: 'primary',
					closable: true,
				},
			},
			{
				component: TagComponent,
				props: {
					variant: 'success',
					content: 'Likes',
				},
			},
			{
				component: TagComponent,
				props: {
					content: 'Show items',
					appendIcon: 'shopingCart',
					variant: 'secondary',
				},
			},
		],
	},
	{
		category: 'Progress',
		to: 'iui:progress',
		components: [
			{
				component: ProgressComponent,
				props: {
					value: 50,
					color: 'blue',
				},
			},
			{
				component: ProgressComponent,
				props: {
					indeterminate: true,
					color: 'cyan',
				},
			},
			{
				component: ProgressComponent,
				props: {
					value: 90,
					displayValue: true,
					color: 'red',
				},
			},
		],
	},
	{
		category: 'Alert',
		to: 'iui:alert',
		components: [
			{
				component: AlertComponent,
				props: {
					title: 'Alert',
					message: 'This is a info alert',
					type: 'info',
				},
			},
			{
				component: AlertComponent,
				props: {
					title: 'Alert',
					message: 'This is a success alert with icon',
					type: 'success',
					showIcon: true,
				},
			},
			{
				component: AlertComponent,
				props: {
					title: 'Alert',
					message: 'This is a danger alert',
					type: 'error',
				},
			},
		],
	},
	{
		category: 'Spinner',
		to: 'iui:spinner',
		components: [
			{
				component: SpinnerComponent,
				props: {
					displayText: true,
					color: 'blue',
				},
			},
			{
				component: SpinnerComponent,
				props: {
					color: 'red',
				},
			},
			{
				component: SpinnerComponent,
				props: {},
			},
		],
	},
	{
		category: 'Skeleton',
		to: 'iui:skeleton',
		components: [
			{
				component: SkeletonComponent,
				props: {
					slots: ['avatar', 'divider', 'table'],
					distribution: ['avatar', 'divider', 'table'],
				},
			},
		],
	}
];
