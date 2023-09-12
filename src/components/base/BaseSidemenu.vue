<template>
	<nav
		class="sticky top-0 left-0 h-full text-primary bg-[#13101270] duration-200 z-10 w-full"
	>
		<div class="fadeIn">
			<ul v-for="({ category, components }, i) of menuItems" :key="i">
				<Accordion :items="components" :title="category" color="blue" />
			</ul>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import { Accordion } from '@/components';
import { ComponentsRouteName } from '@/router/componentsRoutes';

interface MenuItem {
	category: string;
	components: {
		text: string;
		to: {
			name: ComponentsRouteName;
		};
	}[];
}

const menuItems: MenuItem[] = [
	{
		category: 'UI',
		components: [
			{
				text: 'Button',
				to: {
					name: 'iui:button',
				},
			},
			{
				text: 'Icon',
				to: {
					name: 'iui:icon',
				},
			},
			{
				text: 'Badge',
				to: {
					name: 'iui:badge',
				},
			},
			{
				text: 'Avatar',
				to: {
					name: 'iui:avatar',
				},
			},
			{
				text: 'Divider',
				to: {
					name: 'iui:divider',
				},
			},
			{
				text: 'Tag',
				to: {
					name: 'iui:tag',
				},
			},
			{
				text: 'Alert',
				to: {
					name: 'iui:alert',
				},
			},
			{
				text: 'Progress',
				to: {
					name: 'iui:progress',
				},
			},
			{
				text: 'Skeleton',
				to: {
					name: 'iui:skeleton',
				},
			},
			{
				text: 'Tooltip',
				to: {
					name: 'iui:tooltip',
				},
			},
			{
				text: 'Popover',
				to: {
					name: 'iui:popover',
				},
			},
			{
				text: 'Collapse',
				to: {
					name: 'iui:collapse',
				},
			},
			{
				text: 'Image',
				to: {
					name: 'iui:image',
				},
			},
			{
				text: 'Carrousel',
				to: {
					name: 'iui:carrousel',
				},
			},
			{
				text: 'Infinite Scroll',
				to: {
					name: 'iui:infinite-scroll',
				},
			},
		],
	},
	{
		category: 'Navigation',
		components: [
			{
				text: 'Menu',
				to: {
					name: 'iui:menu',
				},
			},
			{
				text: 'Tabs',
				to: {
					name: 'iui:tabs',
				},
			},
			{
				text: 'Breadcrumb',
				to: {
					name: 'iui:breadcrumb',
				},
			},
			{
				text: 'Pagination',
				to: {
					name: 'iui:pagination',
				},
			},
			{
				text: 'Steps',
				to: {
					name: 'iui:steps',
				},
			},
			{
				text: 'Timeline',
				to: {
					name: 'iui:timeline',
				},
			},
		],
	},
	{
		category: 'form',
		components: [
			{
				text: 'Input',
				to: {
					name: 'iui:input',
				},
			},
			{
				text: 'Textarea',
				to: {
					name: 'iui:textarea',
				},
			},
			{
				text: 'Radio',
				to: {
					name: 'iui:radio',
				},
			},
			{
				text: 'Checkbox',
				to: {
					name: 'iui:checkbox',
				},
			},
			{
				text: 'Switch',
				to: {
					name: 'iui:switch',
				},
			},
			{
				text: 'Select',
				to: {
					name: 'iui:select',
				},
			},
			{
				text: 'Slider',
				to: {
					name: 'iui:slider',
				},
			},
			{
				text: 'DatePicker',
				to: {
					name: 'iui:date-picker',
				},
			},
			{
				text: 'TimePicker',
				to: {
					name: 'iui:time-picker',
				},
			},
			{
				text: 'DateTime Picker',
				to: {
					name: 'iui:date-time-picker',
				},
			},
			{
				text: 'Upload',
				to: {
					name: 'iui:upload',
				},
			},
			{
				text: 'Rate',
				to: {
					name: 'iui:rate',
				},
			},
			{
				text: 'Color Picker',
				to: {
					name: 'iui:color-picker',
				},
			},
			{
				text: 'Transfer',
				to: {
					name: 'iui:transfer',
				},
			},
			{
				text: 'Form',
				to: {
					name: 'iui:form',
				},
			},
		],
	},
];
</script>

<style lang="scss" scoped></style>
