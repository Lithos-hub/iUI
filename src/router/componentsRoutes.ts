import { RouteRecordRaw } from 'vue-router';

export const componentsRoutes: RouteRecordRaw[] = [
	{
		component: () => import('@/views/UI/buttonView.vue'),
		name: 'iui:button',
		path: 'button',
	},
	{
		component: () => import('@/views/UI/iconView.vue'),
		name: 'iui:icon',
		path: 'icon',
	},
	{
		component: () => import('@/views/UI/badgeView.vue'),
		name: 'iui:badge',
		path: 'badge',
	},
	{
		component: () => import('@/views/UI/avatarView.vue'),
		name: 'iui:avatar',
		path: 'avatar',
	},
	{
		component: () => import('@/views/UI/dividerView.vue'),
		name: 'iui:divider',
		path: 'divider',
	},
	{
		component: () => import('@/views/UI/tagView.vue'),
		name: 'iui:tag',
		path: 'tag',
	},
	{
		component: () => import('@/views/UI/alertView.vue'),
		name: 'iui:alert',
		path: 'alert',
	},
	{
		component: () => import('@/views/UI/progressView.vue'),
		name: 'iui:progress',
		path: 'progress',
	},
	{
		component: () => import('@/views/UI/skeletonView.vue'),
		name: 'iui:skeleton',
		path: 'skeleton',
	},
	{
		component: () => import('@/views/UI/tooltipView.vue'),
		name: 'iui:tooltip',
		path: 'tooltip',
	},
	{
		component: () => import('@/views/UI/popoverView.vue'),
		name: 'iui:popover',
		path: 'popover',
	},
	{
		component: () => import('@/views/UI/drawerView.vue'),
		name: 'iui:drawer',
		path: 'drawer',
	},
	{
		component: () => import('@/views/UI/collapseView.vue'),
		name: 'iui:collapse',
		path: 'collapse',
	},
	{
		component: () => import('@/views/UI/timelineView.vue'),
		name: 'iui:timeline',
		path: 'timeline',
	},
	{
		component: () => import('@/views/UI/imageView.vue'),
		name: 'iui:image',
		path: 'image',
	},
	{
		component: () => import('@/views/UI/carrouselView.vue'),
		name: 'iui:carrousel',
		path: 'carrousel',
	},
	{
		component: () => import('@/views/UI/backtopView.vue'),
		name: 'iui:backtop',
		path: 'backtop',
	},
	{
		component: () => import('@/views/UI/infinitescrollView.vue'),
		name: 'iui:infinite-scroll',
		path: 'infinite-scroll',
	},
	{
		component: () => import('@/views/UI/lazyloadView.vue'),
		name: 'iui:lazyload',
		path: 'lazyload',
	},
	{
		component: () => import('@/views/UI/stickyView.vue'),
		name: 'iui:sticky',
		path: 'sticky',
	},
	{
		component: () => import('@/views/UI/affixView.vue'),
		name: 'iui:affix',
		path: 'affix',
	},
	{
		component: () => import('@/views/FORM/inputView.vue'),
		name: 'iui:input',
		path: 'input',
	},
	{
		component: () => import('@/views/FORM/textareaView.vue'),
		name: 'iui:textarea',
		path: 'textarea',
	},
	{
		component: () => import('@/views/FORM/radioView.vue'),
		name: 'iui:radio',
		path: 'radio',
	},
	{
		component: () => import('@/views/FORM/checkboxView.vue'),
		name: 'iui:checkbox',
		path: 'checkbox',
	},
	{
		component: () => import('@/views/FORM/switchView.vue'),
		name: 'iui:switch',
		path: 'switch',
	},
	{
		component: () => import('@/views/FORM/selectView.vue'),
		name: 'iui:select',
		path: 'select',
	},
	{
		component: () => import('@/views/FORM/sliderView.vue'),
		name: 'iui:slider',
		path: 'slider',
	},
	{
		component: () => import('@/views/FORM/datepickerView.vue'),
		name: 'iui:date-picker',
		path: 'date-picker',
	},
	{
		component: () => import('@/views/FORM/timepickerView.vue'),
		name: 'iui:time-picker',
		path: 'time-picker',
	},
	{
		component: () => import('@/views/FORM/datetimepickerView.vue'),
		name: 'iui:date-time-picker',
		path: 'date-time-picker',
	},
	{
		component: () => import('@/views/FORM/uploadView.vue'),
		name: 'iui:upload',
		path: 'upload',
	},
	{
		component: () => import('@/views/FORM/rateView.vue'),
		name: 'iui:rate',
		path: 'rate',
	},
	{
		component: () => import('@/views/FORM/colorpickerView.vue'),
		name: 'iui:color-picker',
		path: 'color-picker',
	},
	{
		component: () => import('@/views/FORM/transferView.vue'),
		name: 'iui:transfer',
		path: 'transfer',
	},
	{
		component: () => import('@/views/FORM/formView.vue'),
		name: 'iui:form',
		path: 'form',
	},
];
